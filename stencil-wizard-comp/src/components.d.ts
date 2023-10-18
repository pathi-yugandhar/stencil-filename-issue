/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface StencilWizardComp {
    }
    interface StencilWizardContainer {
    }
    interface StencilWizardFooter {
    }
    interface StencilWizardHeader {
    }
}
declare global {
    interface HTMLStencilWizardCompElement extends Components.StencilWizardComp, HTMLStencilElement {
    }
    var HTMLStencilWizardCompElement: {
        prototype: HTMLStencilWizardCompElement;
        new (): HTMLStencilWizardCompElement;
    };
    interface HTMLStencilWizardContainerElement extends Components.StencilWizardContainer, HTMLStencilElement {
    }
    var HTMLStencilWizardContainerElement: {
        prototype: HTMLStencilWizardContainerElement;
        new (): HTMLStencilWizardContainerElement;
    };
    interface HTMLStencilWizardFooterElement extends Components.StencilWizardFooter, HTMLStencilElement {
    }
    var HTMLStencilWizardFooterElement: {
        prototype: HTMLStencilWizardFooterElement;
        new (): HTMLStencilWizardFooterElement;
    };
    interface HTMLStencilWizardHeaderElement extends Components.StencilWizardHeader, HTMLStencilElement {
    }
    var HTMLStencilWizardHeaderElement: {
        prototype: HTMLStencilWizardHeaderElement;
        new (): HTMLStencilWizardHeaderElement;
    };
    interface HTMLElementTagNameMap {
        "stencil-wizard-comp": HTMLStencilWizardCompElement;
        "stencil-wizard-container": HTMLStencilWizardContainerElement;
        "stencil-wizard-footer": HTMLStencilWizardFooterElement;
        "stencil-wizard-header": HTMLStencilWizardHeaderElement;
    }
}
declare namespace LocalJSX {
    interface StencilWizardComp {
    }
    interface StencilWizardContainer {
    }
    interface StencilWizardFooter {
    }
    interface StencilWizardHeader {
    }
    interface IntrinsicElements {
        "stencil-wizard-comp": StencilWizardComp;
        "stencil-wizard-container": StencilWizardContainer;
        "stencil-wizard-footer": StencilWizardFooter;
        "stencil-wizard-header": StencilWizardHeader;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "stencil-wizard-comp": LocalJSX.StencilWizardComp & JSXBase.HTMLAttributes<HTMLStencilWizardCompElement>;
            "stencil-wizard-container": LocalJSX.StencilWizardContainer & JSXBase.HTMLAttributes<HTMLStencilWizardContainerElement>;
            "stencil-wizard-footer": LocalJSX.StencilWizardFooter & JSXBase.HTMLAttributes<HTMLStencilWizardFooterElement>;
            "stencil-wizard-header": LocalJSX.StencilWizardHeader & JSXBase.HTMLAttributes<HTMLStencilWizardHeaderElement>;
        }
    }
}
