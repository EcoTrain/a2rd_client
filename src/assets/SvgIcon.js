import React, {useState, useEffect, useRef} from "react";

const SvgIcon = ({path, ...props}) => {
  const ImportedIconRef = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const importIcon = async () => {
        console.log({path});
      try {
        // const {default: namedImport} = await import("!!@svgr/webpack?-svgo,+titleProp,+ref!" + path);
        const {default: namedImport} = await import(`.${path}`);
        // const namedImport = React.lazy(() => import("./" + path));
        console.log({namedImport});
        // const {default: namedImport} = (await import(`!!@svgr/webpack?-svgo,+titleProp,+ref!${path}`)).ReactComponent;
        // const {default: namedImport} = (
        //   await import("./wellness/stack/rn_logo.svg")
        // ).default;
        ImportedIconRef.current = namedImport;
      } catch (err) {
        throw err;
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [path]);

  if (!loading && ImportedIconRef.current) {
    const {current: ImportedIcon} = ImportedIconRef;
    return <ImportedIcon {...props} />;
  }

  return null;
};

export default SvgIcon;
