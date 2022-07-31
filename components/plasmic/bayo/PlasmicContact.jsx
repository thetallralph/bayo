// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: b1W5dJMGgkpaNQ8tnw9w16
// Component: pSUId6StArnhbN
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Header from "../../Header"; // plasmic-import: _ihQLPOfY-ioqo/component
import TextInput from "../../TextInput"; // plasmic-import: 7o1EaqzIntGTp/component
import Select from "../../Select"; // plasmic-import: YmMs-iV102CG0x/component
import Checkbox from "../../Checkbox"; // plasmic-import: KpLkvKVTDOZXSl/component
import Button from "../../Button"; // plasmic-import: Yq2ESkcU0XWwK/component
import Footer from "../../Footer"; // plasmic-import: nPWtbdphoKXz__/component
import { useScreenVariants as useScreenVariantsmr1DC3TQ6PZvo } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: mr1D-c3tQ6PZvo/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_bayo.module.css"; // plasmic-import: b1W5dJMGgkpaNQ8tnw9w16/projectcss
import sty from "./PlasmicContact.module.css"; // plasmic-import: pSUId6StArnhbN/css
import ArrowRightsvgIcon from "./icons/PlasmicIcon__ArrowRightsvg"; // plasmic-import: mhLHT-jYtpysfY/icon

export const PlasmicContact__VariantProps = new Array();

export const PlasmicContact__ArgProps = new Array();

function PlasmicContact__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = args;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsmr1DC3TQ6PZvo()
  });

  return (
    <React.Fragment>
      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <p.Stack
          as={"div"}
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          hasGap={true}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header)}
          />

          <div
            data-plasmic-name={"pageBanner"}
            data-plasmic-override={overrides.pageBanner}
            className={classNames(projectcss.all, sty.pageBanner)}
          >
            <div className={classNames(projectcss.all, sty.freeBox__wYqQg)}>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.columns___7GQ28)}
              >
                <div className={classNames(projectcss.all, sty.column__nL91)}>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__d7Jxi)}
                  >
                    <h1
                      data-plasmic-name={"h1"}
                      data-plasmic-override={overrides.h1}
                      className={classNames(
                        projectcss.all,
                        projectcss.h1,
                        projectcss.__wab_text,
                        sty.h1
                      )}
                    >
                      {"Contact Us"}
                    </h1>

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___0UczN
                      )}
                    >
                      {
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
                      }
                    </div>
                  </p.Stack>
                </div>

                <div className={classNames(projectcss.all, sty.column___2VxEp)}>
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__n63P4)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={
                      hasVariant(globalVariants, "screen", "mobileOnly")
                        ? "100%"
                        : "100%"
                    }
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"auto"}
                    loading={
                      hasVariant(globalVariants, "screen", "mobileOnly")
                        ? "lazy"
                        : "lazy"
                    }
                    src={
                      hasVariant(globalVariants, "screen", "mobileOnly")
                        ? {
                            src: "/plasmic/bayo/images/stephenPhillipsHostreviewsCoUk3Mhgvrk4TjMUnsplashjpg.jpeg",
                            fullWidth: 1920,
                            fullHeight: 1280,
                            aspectRatio: undefined
                          }
                        : {
                            src: "/plasmic/bayo/images/stephenPhillipsHostreviewsCoUk3Mhgvrk4TjMUnsplashjpg.jpeg",
                            fullWidth: 1920,
                            fullHeight: 1280,
                            aspectRatio: undefined
                          }
                    }
                  />
                </div>
              </p.Stack>
            </div>
          </div>

          <div
            data-plasmic-name={"mainSection"}
            data-plasmic-override={overrides.mainSection}
            className={classNames(projectcss.all, sty.mainSection)}
          >
            <div className={classNames(projectcss.all, sty.columns__nkdeV)}>
              <div className={classNames(projectcss.all, sty.column__gWtq)}>
                <div
                  data-plasmic-name={"container4"}
                  data-plasmic-override={overrides.container4}
                  className={classNames(projectcss.all, sty.container4)}
                >
                  <h3
                    data-plasmic-name={"h3"}
                    data-plasmic-override={overrides.h3}
                    className={classNames(
                      projectcss.all,
                      projectcss.h3,
                      projectcss.__wab_text,
                      sty.h3
                    )}
                  >
                    {"Get in touch"}
                  </h3>

                  <label
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.label___9Wsne
                    )}
                  >
                    {"Name"}
                  </label>

                  <TextInput
                    className={classNames(
                      "__wab_instance",
                      sty.textInput___9GPqC
                    )}
                    placeholder={" "}
                  />

                  <label
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.label__spia9
                    )}
                  >
                    {"Email"}
                  </label>

                  <TextInput
                    className={classNames(
                      "__wab_instance",
                      sty.textInput__j3Rv
                    )}
                    placeholder={" "}
                  />

                  <label
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.label__d0PVv
                    )}
                  >
                    {"Subject"}
                  </label>

                  <Select
                    data-plasmic-name={"select"}
                    data-plasmic-override={overrides.select}
                    className={classNames("__wab_instance", sty.select)}
                    placeholder={"Please select"}
                  />

                  <label
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.label__fzOK
                    )}
                  >
                    {"Message"}
                  </label>

                  <textarea
                    data-plasmic-name={"textarea"}
                    data-plasmic-override={overrides.textarea}
                    className={classNames(
                      projectcss.all,
                      projectcss.textarea,
                      sty.textarea
                    )}
                    value={""}
                  />

                  <Checkbox
                    data-plasmic-name={"checkbox"}
                    data-plasmic-override={overrides.checkbox}
                    className={classNames("__wab_instance", sty.checkbox)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__yLvkv
                      )}
                    >
                      {hasVariant(globalVariants, "screen", "mobileOnly")
                        ? "I understand that this form is \nstoring my submitted information \nso I can be contacted."
                        : "I understand that this form is storing"}
                    </div>
                  </Checkbox>

                  {true ? (
                    <div
                      className={classNames(projectcss.all, sty.freeBox__x78Cp)}
                    >
                      <Button
                        data-plasmic-name={"button"}
                        data-plasmic-override={overrides.button}
                        className={classNames("__wab_instance", sty.button)}
                        color={"blue"}
                        endIcon={
                          <ArrowRightsvgIcon
                            data-plasmic-name={"svg"}
                            data-plasmic-override={overrides.svg}
                            className={classNames(projectcss.all, sty.svg)}
                            role={"img"}
                          />
                        }
                        shape={"rounded"}
                        showEndIcon={true}
                      >
                        {"Start Now"}
                      </Button>
                    </div>
                  ) : null}
                </div>
              </div>

              <div className={classNames(projectcss.all, sty.column__iCcug)}>
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__y4Ib)}
                  displayHeight={"100%"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"100%"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/bayo/images/corinneKutzTMi2R5NfoUnsplashjpg.jpeg",
                    fullWidth: 1920,
                    fullHeight: 1280,
                    aspectRatio: undefined
                  }}
                />
              </div>
            </div>
          </div>

          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </p.Stack>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "header",
    "pageBanner",
    "h1",
    "mainSection",
    "container4",
    "h3",
    "select",
    "textarea",
    "checkbox",
    "button",
    "svg",
    "footer"
  ],

  header: ["header"],
  pageBanner: ["pageBanner", "h1"],
  h1: ["h1"],
  mainSection: [
    "mainSection",
    "container4",
    "h3",
    "select",
    "textarea",
    "checkbox",
    "button",
    "svg"
  ],

  container4: [
    "container4",
    "h3",
    "select",
    "textarea",
    "checkbox",
    "button",
    "svg"
  ],

  h3: ["h3"],
  select: ["select"],
  textarea: ["textarea"],
  checkbox: ["checkbox"],
  button: ["button", "svg"],
  svg: ["svg"],
  footer: ["footer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicContact__ArgProps,
          internalVariantPropNames: PlasmicContact__VariantProps
        }),

      [props, nodeName]
    );

    return PlasmicContact__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicContact";
  } else {
    func.displayName = `PlasmicContact.${nodeName}`;
  }
  return func;
}

export const PlasmicContact = Object.assign(
  // Top-level PlasmicContact renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    pageBanner: makeNodeComponent("pageBanner"),
    h1: makeNodeComponent("h1"),
    mainSection: makeNodeComponent("mainSection"),
    container4: makeNodeComponent("container4"),
    h3: makeNodeComponent("h3"),
    select: makeNodeComponent("select"),
    textarea: makeNodeComponent("textarea"),
    checkbox: makeNodeComponent("checkbox"),
    button: makeNodeComponent("button"),
    svg: makeNodeComponent("svg"),
    footer: makeNodeComponent("footer"),
    // Metadata about props expected for PlasmicContact
    internalVariantProps: PlasmicContact__VariantProps,
    internalArgProps: PlasmicContact__ArgProps
  }
);

export default PlasmicContact;
/* prettier-ignore-end */