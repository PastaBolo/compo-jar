import { Rule, chain } from '@angular-devkit/schematics'
import { updatePackageJsonScripts } from '../utility/package-config'

export default function(_options: any): Rule {
  return chain([updatePackageJsonScripts()])
}
