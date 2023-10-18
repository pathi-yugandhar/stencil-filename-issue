# stencil-filename-issue

Steps :

- Go to `stencil-button` folder. do `npm i` and do `npm run build`
- cd to `stencil-wizard-comp` and `npm i` and do `npm run build`

- Observe `dist/cjs` or `dist/esm` folder in `stencil-wizard-comp`.

- You will see a file called `stencil-wizard-comp_4.cjs.entry.js` you will see a filename somthing like this ...

```js
exports.stencil_wizard_comp =
  stencilWizardComp_stencilWizardContainer_stencilWizardFooter_stencilWizardHeader_entry.StencilWizardComp;
exports.stencil_wizard_container =
  stencilWizardComp_stencilWizardContainer_stencilWizardFooter_stencilWizardHeader_entry.StencilWizardContainer;
exports.stencil_wizard_footer =
  stencilWizardComp_stencilWizardContainer_stencilWizardFooter_stencilWizardHeader_entry.StencilWizardFooter;
exports.stencil_wizard_header =
  stencilWizardComp_stencilWizardContainer_stencilWizardFooter_stencilWizardHeader_entry.StencilWizardHeader;
```
