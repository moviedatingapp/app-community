// import Image from "next/image";
import React from "react";
import FormWrapper from "./_components/FormWrapper";
import CommunityDropdown from "./_components/CommunityDropdown";
import CreatePostForm from "./_components/CreatePostForm";

export default function CreatePostPage() {
  return (
    <div className="w-2/3 flex justify-start">
      <section className="w-4/6">
        <FormWrapper>
          <div className="flex justify-between">
            <h1 className=" font-BH-Satoshi-bold text-24 text-dark-grey">
              Create post
            </h1>
            <button
              type="button"
              className="font-BH-Satoshi-medium text-nero-black hover:bg-light-grey px-4 py-2 rounded-56"
            >
              Drafts
            </button>
          </div>
          <CommunityDropdown />
          <CreatePostForm />
        </FormWrapper>
      </section>
    </div>
  );
}
