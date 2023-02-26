import React from "react";

const Resources = () => {
  return (
    <div>
      <h1 className="text-4xl text-center	 ... emotions">
        Resources regarding mental health
      </h1>
      <p className="tracking-wide text-justify text-lg resources-para">
        Most people face mental health challenges at one point or another in
        their lifetime. Occasional grief, stress, and sadness are normal. But if
        you’re experiencing persistent or severe mental health challenges, it’s
        time to get help.
      </p>

      <h4 class=" text-7xl font-bold tracking-tight text-gray-900 dark:text-white text-justify resources-para ">
        When should you get help?
      </h4>
      <p class="font-normal text-gray-700 dark:text-gray-400 text-justify resources-para text-lg">
        The following symptoms might be signs of an underlying mental health
        condition:
      </p>

      <ul class="list-disc text-justify resources-para text-lg">
        <li>thoughts of hurting yourself or others</li>
        <li>
          frequent or persistent feelings of sadness, anger, fear, worry, or
          anxiety
        </li>
        <li>frequent emotional outbursts or mood swings</li>
        <li>confusion or unexplained memory loss</li>
        <li>delusions or hallucinations</li>
      </ul>
      <p class="font-normal text-gray-700 dark:text-gray-400 text-justify resources-para text-lg">
        If you’re thinking about hurting yourself or someone else, get help
        right away. If you have other symptoms on this list, make an appointment
        with your doctor. Once they’ve ruled out a physical basis for your
        symptoms, they may refer you to a mental health specialist and other
        resources.
      </p>

      <h5 class=" text-7xl font-bold tracking-tight text-gray-900 dark:text-white text-justify resources-para ">
        What type of healthcare provider should you see?
      </h5>

      <h5 class=" text-7xl font-bold tracking-tight text-gray-900 dark:text-white text-justify resources-para ">
        Psychiatrist
      </h5>
      <p class="font-normal text-gray-700 dark:text-gray-400 text-justify therapists text-lg">
        They often diagnose and treat conditions such as:
      </p>
      <ul class="list-disc text-justify therapists text-lg">
        <li>depression</li>
        <li>anxiety disorders</li>
        <li>obsessive-compulsive disorder (OCD)</li>
        <li>bipolar disorder</li>
        <li>schizophrenia</li>
      </ul>

      <h5 class=" text-7xl font-bold tracking-tight text-gray-900 dark:text-white text-justify resources-para ">
        Psychologist
      </h5>
      <p class="font-normal text-gray-700 dark:text-gray-400 text-justify therapists text-lg">
        If your doctor thinks you might benefit from therapy, they might refer
        you to a psychologist. Psychologists are trained to diagnose and treat
        mental health conditions and challenges, such as:
      </p>
      <ul class="list-disc text-justify therapists text-lg">
        <li>depression</li>
        <li>anxiety disorders</li>
        <li>eating disorders</li>
        <li>learning difficulties</li>
        <li>relationship problems</li>
        <li>substance abuse</li>
      </ul>
      <p class="font-normal text-gray-700 dark:text-gray-400 text-justify therapists text-lg">
        Psychologists are also trained to give psychological tests. For example,
        they might administer an IQ test or personality test. A psychologist can
        potentially help you learn to manage your symptoms through counseling or
        other forms of therapy
      </p>

      <div class="flex justify-center emergency">
        <div class="block max-w-sm rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700">
          <h5 class="mb-2 text-xl font-medium text-red-600">
            IN CASE OF EMERGENCY:
          </h5>
          <h5 class=" text-lg font-bold tracking-tight text-gray-900 dark:text-white text-justify">
            Suicide prevention hotlines
          </h5>
          <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            Have you been thinking about hurting yourself? Consider contacting a
            suicide prevention hotline. Help is available.{" "}
          </p>
          <p className="text-lg justify-center font-semibold">
            Dial <a href="tel:+91 9152987821">+91 9152987821</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resources;
