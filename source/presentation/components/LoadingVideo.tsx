import { Fragment } from "react";

export const LoadingVideo = (): JSX.Element => {
  return (
    <Fragment>
      <div className="h-screen w-screen bg-dark flex items-center justify-center fixed inset-0 z-50">
        <div id="loader" className="loader"></div>
      </div>
    </Fragment>
  );
};
