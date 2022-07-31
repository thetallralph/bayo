// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: b1W5dJMGgkpaNQ8tnw9w16
// Component: Ydv4hx-qctbXT1
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
import Footer from "../../Footer"; // plasmic-import: nPWtbdphoKXz__/component
import { useScreenVariants as useScreenVariantsmr1DC3TQ6PZvo } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: mr1D-c3tQ6PZvo/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_bayo.module.css"; // plasmic-import: b1W5dJMGgkpaNQ8tnw9w16/projectcss
import sty from "./PlasmicTermsOfServices.module.css"; // plasmic-import: Ydv4hx-qctbXT1/css

export const PlasmicTermsOfServices__VariantProps = new Array();

export const PlasmicTermsOfServices__ArgProps = new Array();

function PlasmicTermsOfServices__RenderFunc(props) {
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
            data-plasmic-name={"mainSection"}
            data-plasmic-override={overrides.mainSection}
            className={classNames(projectcss.all, sty.mainSection)}
          >
            <div
              data-plasmic-name={"pageBanner"}
              data-plasmic-override={overrides.pageBanner}
              className={classNames(projectcss.all, sty.pageBanner)}
            >
              <div className={classNames(projectcss.all, sty.freeBox__zOoDt)}>
                <p.Stack
                  as={"div"}
                  data-plasmic-name={"columns"}
                  data-plasmic-override={overrides.columns}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.columns)}
                >
                  <div
                    className={classNames(projectcss.all, sty.column__ePqsF)}
                  >
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(
                        projectcss.all,
                        sty.freeBox___8HWAd
                      )}
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
                        {"Terms of Service"}
                      </h1>

                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__mjq16
                        )}
                      >
                        {
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
                        }
                      </div>
                    </p.Stack>
                  </div>

                  <div
                    className={classNames(projectcss.all, sty.column__aqofN)}
                  >
                    <p.PlasmicImg
                      data-plasmic-name={"img"}
                      data-plasmic-override={overrides.img}
                      alt={""}
                      className={classNames(sty.img)}
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
                              src: "/plasmic/bayo/images/corinneKutzTMi2R5NfoUnsplashjpg.jpeg",
                              fullWidth: 1920,
                              fullHeight: 1280,
                              aspectRatio: undefined
                            }
                          : {
                              src: "/plasmic/bayo/images/greenChameleonS9Cc2SKySjmUnsplashjpg.jpeg",
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
          </div>

          <div
            data-plasmic-name={"mainSection2"}
            data-plasmic-override={overrides.mainSection2}
            className={classNames(projectcss.all, sty.mainSection2)}
          >
            <div
              data-plasmic-name={"container3"}
              data-plasmic-override={overrides.container3}
              className={classNames(projectcss.all, sty.container3)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__d2YZt)}
              >
                <h3
                  className={classNames(
                    projectcss.all,
                    projectcss.h3,
                    projectcss.__wab_text,
                    sty.h3__lrzvz
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobileOnly")
                    ? "Professional And\nDedicated Consulting Services..."
                    : "Terms of Service heading lorem"}
                </h3>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__i0R2V
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobileOnly")
                    ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a metus quis lorem malesuada luctus. Cras lacinia, eros at dapibus molestie, risus tortor pretium ligula, eu malesuada tortor eros dapibus mi. Proin laoreet efficitur suscipit. Donec molestie volutpat euismod. Nulla gravida ligula in eros facilisis, sed dignissim tellus aliquam. Etiam convallis enim nisi, at suscipit tortor pulvinar at. "
                    : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a metus quis lorem malesuada luctus. Cras lacinia, eros at dapibus molestie, risus tortor pretium ligula, eu malesuada tortor eros dapibus mi. Proin laoreet efficitur suscipit. Donec molestie volutpat euismod. Nulla gravida ligula in eros facilisis, sed dignissim tellus aliquam. Etiam convallis enim nisi, at suscipit tortor pulvinar at. "}
                </div>
              </p.Stack>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__pVkiI)}
              >
                <h3
                  className={classNames(
                    projectcss.all,
                    projectcss.h3,
                    projectcss.__wab_text,
                    sty.h3___1LBa
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobileOnly")
                    ? "Professional And\nDedicated Consulting Services..."
                    : "Lorem Heading main privacy policy"}
                </h3>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__pg5B9
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobileOnly")
                    ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a metus quis lorem malesuada luctus. Cras lacinia, eros at dapibus molestie, risus tortor pretium ligula, eu malesuada tortor eros dapibus mi. Proin laoreet efficitur suscipit. Donec molestie volutpat euismod. Nulla gravida ligula in eros facilisis, sed dignissim tellus aliquam. Etiam convallis enim nisi, at suscipit tortor pulvinar at. "
                    : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a metus quis lorem malesuada luctus. Cras lacinia, eros at dapibus molestie, risus tortor pretium ligula, eu malesuada tortor eros dapibus mi. Proin laoreet efficitur suscipit. Donec molestie volutpat euismod. Nulla gravida ligula in eros facilisis, sed dignissim tellus aliquam. Etiam convallis enim nisi, at suscipit tortor pulvinar at. "}
                </div>
              </p.Stack>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__nVyr7)}
              >
                <h3
                  className={classNames(
                    projectcss.all,
                    projectcss.h3,
                    projectcss.__wab_text,
                    sty.h3__uue2U
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobileOnly")
                    ? "Professional And\nDedicated Consulting Services..."
                    : "Lorem Heading main privacy policy"}
                </h3>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__s6MjQ
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobileOnly")
                    ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a metus quis lorem malesuada luctus. Cras lacinia, eros at dapibus molestie, risus tortor pretium ligula, eu malesuada tortor eros dapibus mi. Proin laoreet efficitur suscipit. Donec molestie volutpat euismod. Nulla gravida ligula in eros facilisis, sed dignissim tellus aliquam. Etiam convallis enim nisi, at suscipit tortor pulvinar at. "
                    : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a metus quis lorem malesuada luctus. Cras lacinia, eros at dapibus molestie, risus tortor pretium ligula, eu malesuada tortor eros dapibus mi. Proin laoreet efficitur suscipit. Donec molestie volutpat euismod. Nulla gravida ligula in eros facilisis, sed dignissim tellus aliquam. Etiam convallis enim nisi, at suscipit tortor pulvinar at. "}
                </div>
              </p.Stack>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox___8BP3G)}
              >
                <h3
                  className={classNames(
                    projectcss.all,
                    projectcss.h3,
                    projectcss.__wab_text,
                    sty.h3__qu0Nv
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobileOnly")
                    ? "Professional And\nDedicated Consulting Services..."
                    : "Lorem Heading main privacy policy"}
                </h3>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__fG01
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobileOnly")
                    ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a metus quis lorem malesuada luctus. Cras lacinia, eros at dapibus molestie, risus tortor pretium ligula, eu malesuada tortor eros dapibus mi. Proin laoreet efficitur suscipit. Donec molestie volutpat euismod. Nulla gravida ligula in eros facilisis, sed dignissim tellus aliquam. Etiam convallis enim nisi, at suscipit tortor pulvinar at. "
                    : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a metus quis lorem malesuada luctus. Cras lacinia, eros at dapibus molestie, risus tortor pretium ligula, eu malesuada tortor eros dapibus mi. Proin laoreet efficitur suscipit. Donec molestie volutpat euismod. Nulla gravida ligula in eros facilisis, sed dignissim tellus aliquam. Etiam convallis enim nisi, at suscipit tortor pulvinar at. "}
                </div>
              </p.Stack>
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
    "mainSection",
    "pageBanner",
    "columns",
    "h1",
    "img",
    "mainSection2",
    "container3",
    "footer"
  ],

  header: ["header"],
  mainSection: ["mainSection", "pageBanner", "columns", "h1", "img"],
  pageBanner: ["pageBanner", "columns", "h1", "img"],
  columns: ["columns", "h1", "img"],
  h1: ["h1"],
  img: ["img"],
  mainSection2: ["mainSection2", "container3"],
  container3: ["container3"],
  footer: ["footer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicTermsOfServices__ArgProps,
          internalVariantPropNames: PlasmicTermsOfServices__VariantProps
        }),

      [props, nodeName]
    );

    return PlasmicTermsOfServices__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTermsOfServices";
  } else {
    func.displayName = `PlasmicTermsOfServices.${nodeName}`;
  }
  return func;
}

export const PlasmicTermsOfServices = Object.assign(
  // Top-level PlasmicTermsOfServices renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    mainSection: makeNodeComponent("mainSection"),
    pageBanner: makeNodeComponent("pageBanner"),
    columns: makeNodeComponent("columns"),
    h1: makeNodeComponent("h1"),
    img: makeNodeComponent("img"),
    mainSection2: makeNodeComponent("mainSection2"),
    container3: makeNodeComponent("container3"),
    footer: makeNodeComponent("footer"),
    // Metadata about props expected for PlasmicTermsOfServices
    internalVariantProps: PlasmicTermsOfServices__VariantProps,
    internalArgProps: PlasmicTermsOfServices__ArgProps
  }
);

export default PlasmicTermsOfServices;
/* prettier-ignore-end */