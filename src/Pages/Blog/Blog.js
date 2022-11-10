import React from "react";
import useTitle from "../../hooks/UseTitle";

const Blog = () => {
  useTitle('Blog')
  return (
    <div className="grid gap-12 lg:grid-cols-4 mt-28 w-full mx-auto">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-3xl font-semibold">
            What is the Difference Between SQL and NoSQl?
          </h2>
          <p className="text-l">
            SQL is the programming language used to interface with relational
            databases. (Relational databases model data as records in rows and
            tables with logical links between them). NoSQL is a class of DBMs
            that are non-relational and generally do not use SQL. Comparing SQL
            vs NoSQL databases, SQL databases are table-based databases, whereas
            NoSQL databases can be document-based, key-value pairs, and graph
            databases. SQL databases are vertically scalable, while NoSQL
            databases are horizontally scalable.
          </p>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
        <h2 className="text-3xl font-semibold">
          What is JWT? How does it works?
        </h2>
        <p>
          JSON Web Token (JWT) is an open standard (RFC 7519) that defines a
          compact and self-contained way for securely transmitting information
          between parties as a JSON object. This information can be verified and
          trusted because it is digitally signed.Although JWTs can be encrypted
          to also provide secrecy between parties, we will focus on signed
          tokens. Signed tokens can verify the integrity of the claims contained
          within it, while encrypted tokens hide those claims from other
          parties. When tokens are signed using public/private key pairs, the
          signature also certifies that only the party holding the private key
          is the one that signed it.
        </p>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
        <h2 className="text-3xl font-semibold">
          What is the Difference Between JavaScript and NodeJS?
        </h2>
        <p>
          Javascript is a Scripting language. It is mostly abbreviated as JS. It
          can be said that Javascript is the updated version of the ECMA script.
          Javascript is a high-level programming language that uses the concept
          of Oops but it is based on prototype inheritance. NodeJS is a
          cross-platform and opensource Javascript runtime environment that
          allows the javascript to be run on the server-side. Nodejs allows
          Javascript code to run outside the browser. Nodejs comes with a lot of
          modules and mostly used in web development.
        </p>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
        <h2 className="text-3xl font-semibold">
          How does NodeJS handle multiple req at the same time?
        </h2>
        <p>
          e know NodeJS application is single-threaded. Say, if processing
          involves request A that takes 10 seconds, it does not mean that a
          request which comes after this request needs to wait 10 seconds to
          start processing because NodeJS event loops are only single-threaded.
          The entire NodeJS architecture is not single-threaded. How NodeJS
          handle multiple client requests? NodeJS receives multiple client
          requests and places them into EventQueue. NodeJS is built with the
          concept of event-driven architecture. NodeJS has its own EventLoop
          which is an infinite loop that receives requests and processes them.
          EventLoop is the listener for the EventQueue. If NodeJS can process
          the request without I/O blocking then the event loop would itself
          process the request and sends the response back to the client by
          itself. But, it is possible to process multiple requests parallelly
          using the NodeJS cluster module or worker_threads module.
        </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
