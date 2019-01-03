import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics'

export function updatePackageJsonScripts(): Rule {
  return (tree: Tree, _context: SchematicContext): Tree => {
    if (tree.exists('package.json')) {
      const json = JSON.parse(tree.read('package.json')!.toString('utf-8'))
      if (!json.scripts) json.scripts = {}
      Object.assign(json.scripts, { compodoc: 'npx compodoc -p src/tsconfig.app.json' })
      tree.overwrite('package.json', JSON.stringify(json, null, 2))
    }
    return tree
  }
}
