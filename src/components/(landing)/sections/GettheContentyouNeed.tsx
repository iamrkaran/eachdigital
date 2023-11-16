import React from "react";

const GetTheContentYouNeed = () => {
  return (
    <section className="bg-primary-100 py-16">
      <div className="container mx-auto">
      <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4">A messenger so good it might just have to be your go-to</h2>
        <div className="flex flex-col md:flex-row">
          <div className=" pr-8">
            <p className="text-lg text-gray-600">
              We&apos;re a friendly network here and the 
              perfect Link-in-Bio Elsewhere, yet, at our 
              core, we&apos;re a messanger we&apos;d rather use 
              than standard texts.<br/>
              Hide messages threads. Require a passcode to view threads, ask to share a
              message to your personal chat channel/individual groupchat. Temporarily
              pin messages and select different messages to be able to group them. Make a mindmap 
              from messages. Make requests posted on the timeline from a message.
              Use a read out option to hear messages.
              hear messages, and Send disappearing
              text & other forms of messages. Add a
              message to a Journal type page to keep
              track of it on that day, also add any other
              type of content on the platform. Highlight a
              message, Add themes to messages, and
              Show a snapshot alert &quot;This user has
              screenshot updates on&quot; - to Increase
              privacy. Make table heading and a new
              table trom a message and Request to add
              a boxed version of a message to your
              profile which looks more like a widget.
            </p>
          </div>
          <div className="md:w-1/2">
            {/* You can include an image here if needed */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetTheContentYouNeed;
