import { readFile, writeFile } from 'node:fs/promises';

// Build-time publication snapshot. The website never fetches private Host data.
const source = new URL('../../eidolon_data/eidolon_data/resources/companion_presets/', import.meta.url);
const target = new URL('../app/companions/catalog.json', import.meta.url);
const { presets } = JSON.parse(await readFile(new URL('catalog.json', source), 'utf8'));
const catalog = await Promise.all(presets.map(async (id) => {
  const p = JSON.parse(await readFile(new URL(`${id}.json`, source), 'utf8'));
  if (p.preset_id !== id) throw new Error(`Preset id mismatch: ${id}`);
  return { id, revision: p.revision, name: p.default_name, title: p.title, description: p.description, examples: p.examples };
}));
const contents = `${JSON.stringify(catalog, null, 2)}\n`;
if (process.argv.includes('--check')) {
  if (await readFile(target, 'utf8') !== contents) throw new Error('Companion copy drifted. Run npm run companions:sync.');
  console.log('Public companion copy matches Data presets.');
} else {
  await writeFile(target, contents);
  console.log('Updated public companion copy.');
}
