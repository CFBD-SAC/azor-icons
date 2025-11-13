const template = (variables, { tpl }) => {
  return tpl`
${variables.imports};

${variables.interfaces};

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

const ${variables.componentName} = (props:IconProps) => (
  ${variables.jsx}
);

${variables.exports};
`;
};

module.exports = template;
