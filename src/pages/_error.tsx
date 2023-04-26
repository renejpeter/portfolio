import { ServerResponse } from "http";
import { ErrorProps } from "next/error";

function Error({ statusCode }: { statusCode?: number }) {
  if (statusCode) {
    return (
      <article className="flex flex-col items-center justify-center min-h-screen p-6">
        <h1 className="text-center text-8xl font-extrabold gr-orange-yelloworange mb-4">
          {statusCode}
        </h1>
        <p className="text-lg">An error occurred.</p>
      </article>
    );
  }

  return (
    <article className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-center text-8xl font-extrabold gr-orange-yelloworange mb-4">
        {statusCode}
      </h1>
      <p className="text-lg">
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : "An error occurred on client"}
      </p>
    </article>
  );
}

Error.getInitialProps = ({
  res,
  err,
}: {
  res: ServerResponse;
  err: ErrorProps;
}) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
