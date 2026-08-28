import { ServiceDetailsFaq } from "@/components/service-details-faq";

/**
 * Contenu principal `.services-details__content` de `page-service-details.html`,
 * verbatim. Les trois images (`service-details.jpg`, `service-d1.jpg`,
 * `service-d2.jpg`) répondent 404 sur le site source — omises plutôt que
 * remplacées, cf. politique des assets manquants (BEHAVIORS.md).
 */
export function ServiceDetailsContent() {
  return (
    <div>
      <h3 className="mb-[15px] text-[36px] leading-[1.2em] font-bold text-theme-1">
        Service Overview
      </h3>
      <p className="text-body-text">
        Lorem ipsum is simply free text used by copytyping refreshing. Neque
        porro est qui dolorem ipsum quia quaed inventore veritatis et quasi
        architecto beatae vitae dicta sunt explicabo. Aelltes port lacus
        quis enim var sed efficitur turpis gilla sed sit amet finibus eros.
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the ndustry standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make
      </p>
      <p className="text-body-text">
        When an unknown printer took a galley of type and scrambled it to
        make a type specimen book. It has survived not only five centuries,
        but also the leap into electronic typesetting, remaining essentially
        unchanged Lorem ipsum dolor sit amet consec tetur adipis icing elit
      </p>

      <div className="mt-10">
        <h3 className="mb-[15px] text-[36px] leading-[1.2em] font-bold text-theme-1">
          Service Center
        </h3>
        <p className="text-body-text">
          Lorem ipsum is simply free text used by copytyping refreshing.
          Neque porro est qui dolorem ipsum quia quaed inventore veritatis
          et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
        <blockquote className="relative my-[30px] bg-white px-10 py-5 text-base leading-[30px] font-bold text-[#242323] shadow-[0_10px_60px_rgba(0,0,0,0.1)] before:absolute before:inset-y-[10px] before:left-0 before:w-1 before:rounded-[5px] before:bg-theme-2 before:content-['']">
          Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed
          do eiusmod remaining essentially unchanged Lorem ipsum dolor sit
          amet consec tetur
        </blockquote>

        <div className="mt-6 grid grid-cols-1 gap-x-[30px] gap-y-5 md:grid-cols-2">
          <p className="text-body-text">
            Lorem ipsum dolor sit amet consec adipis elit Dolor repellat
            pariatur temporibus doloribus hic conse quatur copy typing
            refreshing
          </p>
          <p className="text-body-text">
            Lorem ipsum dolor sit amet consec adipis elit Dolor repellat
            pariatur temporibus doloribus hic conse quatur copy typing
            refreshing
          </p>
        </div>
      </div>

      <div className="mt-[25px]">
        <h3 className="mb-[15px] text-[36px] leading-[1.2em] font-bold text-theme-1">
          Frequently Asked Question
        </h3>
        <p className="text-body-text">
          Lorem ipsum is simply free text used by copytyping refreshing.
          Neque porro est qui dolorem ipsum quia quaed inventore veritatis
          et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
        <ServiceDetailsFaq />
      </div>
    </div>
  );
}
