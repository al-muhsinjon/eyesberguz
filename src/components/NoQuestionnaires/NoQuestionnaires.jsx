import React from "react";

const NoQuestionnaires = () => {
  return (
    <section className=" container mb-10">
      <div class="bg-[#fbfbfc] rounded-xl p-8 sm:p-10 md:p-12 grid gap-4 justify-center items-center text-center">
        <h2 class="text-2xl font-bold">Нет анкет специалистов</h2>
        <span class="text-base">По выбранной вами услуге нет подходящих анкет специалистов</span>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div></div>
        <div></div>
      </div>
    </section>
  );
};

export default NoQuestionnaires;
