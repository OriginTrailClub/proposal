import * as React from "react";

const useFindElementOfType = (children, component) => {
  return React.useMemo(() => {
    return React.Children.toArray(children).find(child => {
      if (React.isValidElement(child) && child.type === component) {
        return true;
      }

      return false;
    })
  }, [children, component]);
}

export default useFindElementOfType
