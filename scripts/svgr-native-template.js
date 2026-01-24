const template = (variables, { tpl }) => {
  return tpl`
${variables.imports};


interface IconProps extends SvgProps {
  size?: number;
}

const ${variables.componentName} = (props: IconProps) => (
  ${variables.jsx}
);

${variables.exports};
`;
};

module.exports = template;
