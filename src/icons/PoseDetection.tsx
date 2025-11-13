import * as React from "react";
import type { SVGProps } from "react";
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}
const SvgPoseDetection = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 600 600"
    fill="currentColor"
    width={props.size}
    height={props.size}
    {...props}
  >
    <circle cx={300.7} cy={72.2} r={34.6} />
    <circle cx={300.7} cy={155.1} r={20} />
    <circle cx={300.7} cy={307.2} r={20} />
    <circle cx={389.1} cy={155.1} r={20} />
    <circle cx={415.3} cy={233} r={20} />
    <circle cx={441.1} cy={311.3} r={20} />
    <circle cx={210.9} cy={155.1} r={20} />
    <circle cx={184.7} cy={233} r={20} />
    <circle cx={158.9} cy={311.3} r={20} />
    <circle cx={226.9} cy={367.2} r={20} />
    <circle cx={373.5} cy={367.2} r={20} />
    <circle cx={227.2} cy={454.8} r={20} />
    <circle cx={373.8} cy={454.8} r={20} />
    <circle cx={227.2} cy={542.4} r={20} />
    <circle cx={373.8} cy={542.4} r={20} />
    <path d="M297 72.2h7.5v233.2H297zM155.311 309.812l51.985-155.855 7.114 2.373-51.984 155.855z" />
    <path d="m224.46 365.44 73.816-62.923 4.866 5.707-73.817 62.924z" />
    <path d="M223.1 367.2h7.5v175.2h-7.5zm-12.2-215.9h178.3v7.5H210.9zm158.8 215.9h7.5v175.2h-7.5z" />
    <path d="m298.268 308.197 4.864-5.708 73.827 62.914-4.865 5.708zm87.325-151.872 7.114-2.374 52.001 155.855-7.114 2.374z" />
  </svg>
);
export default SvgPoseDetection;
