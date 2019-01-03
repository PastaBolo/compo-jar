import { Rule, SchematicContext, Tree, chain } from '@angular-devkit/schematics'
// import { NodePackageInstallTask, RunSchematicTask } from '@angular-devkit/schematics/tasks'
import { RunSchematicTask } from '@angular-devkit/schematics/tasks'
import { addPackageJsonDependency, NodeDependency, NodeDependencyType } from '@schematics/angular/utility/dependencies'

// let installTaskId: TaskId

function addPackageJsonDependencies(): Rule {
  return (tree: Tree, _context: SchematicContext): Tree => {
    const dependencies: NodeDependency[] = [
      { name: '@compodoc/compodoc', version: '*', type: NodeDependencyType.Dev },
      { name: 'ui-jar', version: '*', type: NodeDependencyType.Dev }
    ]
    dependencies.forEach(dependency => addPackageJsonDependency(tree, dependency))
    return tree
  }
}

function installDependencies(): Rule {
  return (tree: Tree, _context: SchematicContext): Tree => {
    // installTaskId = context.addTask(new NodePackageInstallTask())
    return tree
  }
}

function setupProject(): Rule {
  return (tree: Tree, context: SchematicContext): Tree => {
    // context.addTask(new RunSchematicTask('setup-project', {}), [installTaskId])
    context.addTask(new RunSchematicTask('setup-project', {}))
    return tree
  }
}

export default function(_options: any): Rule {
  return chain([addPackageJsonDependencies(), installDependencies(), setupProject()])
}
