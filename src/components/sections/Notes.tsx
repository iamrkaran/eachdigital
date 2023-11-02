import Image from "next/image";
import React from "react";

const Notes = () => {
  return (
    <section className="bg-primary-100 py-16">
      <div className="container mx-auto flex flex-col items-center">
        <div className="w-64 h-64 rounded-full overflow-hidden mb-8">
          <Image
            width={500}
            height={500}
            src="/images/tablet.each.png" // Replace with the image file path
            alt="Notes Image"
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-4xl font-extrabold mb-4">Notes Section</h2>
        <p className="text-lg mb-8 text-center">
          This is where you can find our latest updates and important notes.
        </p>
        <ul className="text-left list-disc">
          <li className="mb-2">Stay tuned for exciting announcements.</li>
          <li className="mb-2">Get insights and tips for using our platform.</li>
          <li className="mb-2">Join discussions and share your thoughts.</li>
        </ul>
      </div>
    </section>
  );
};

export default Notes;
