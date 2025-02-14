import React, { useState } from 'react';

// Collapsible Section Component using Tailwind CSS
const CollapsibleSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-8 border border-gray-300 rounded-lg p-4 bg-gray-100 ">
      <h2
        className="text-gray-600 pb-1 cursor-pointer flex justify-between items-center text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span className="text-base">{isOpen ? '▼' : '▶'}</span>
      </h2>
      {isOpen && <div className="mt-[15px]">{children}</div>}
    </div>
  );
};

// Main Policy Component containing all the provided content
const ContractorHealthAndSafetyPolicy = () => (
  <div className="p-5 font-sans leading-relaxed max-w-5xl mx-auto mt-20">
    <h1 className="text-center text-gray-800 mb-5 text-4xl">
      CONTRACTOR HEALTH AND SAFETY POLICY
    </h1>

    <CollapsibleSection title="Policy Statement">
      <p>
        This policy is to assist in the provision of a safe and healthy working environment for all employees, Contractors, clients and visitors to I.V JATAU GLOBAL RESOURCES LTD project premises. The Policy will minimize our company and contractors' exposure to risk in any project involving the additions, alteration or maintenance of our company project buildings, drilling equipment or services infrastructure by the use of Contractors.
      </p>
      <p>
        I.V JATAU GLOBAL RESOURCES LTD is committed to ensuring the health and safety of all employees, customers/clients and others that may be affected by the issues arising from the engagement of Contractor. No work on I.V JATAU GLOBAL RESOURCES LTD location is permitted without the appropriate statutory authorization permit as dictated by this Policy. I.V JATAU GLOBAL RESOURCES LTD employees and Contractors are required to read and comply with the requirements of this Policy before any contract being agreed.
      </p>
      <p>
        Ill. Suitably experienced to perform the tasks; in possession of all necessary licenses, registrations and insurance required to perform the work safely and in compliance with appropriate regulations and duly accredited by our company; carry out preliminary inspection and be acquainted with any potential hazards associated with the location or use of the area where the works are to be carried out; made aware of the I.V JATAU GLOBAL RESOURCES LTD Emergency Procedures, inducted in the I.V JATAU GLOBAL RESOURCES LTD safety Policies; procure and maintain throughout the term of this Contract adequate insurance coverage from a reputable Insurance Company registered in Nigeria or an International Firm with offices in Nigeria, acceptable to I.V JATAU GLOBAL RESOURCES LTD to cover such risk as are customarily and statutorily required to be maintained, including but not limited to Workmen Compensation, Employer's Liability and contractors all risk Insurance for its employees, contractors and sub-contractor; advice regarding the application of this document can be obtained from the Health, Safety and Environment Department.
      </p>
    </CollapsibleSection>

    <CollapsibleSection title="Definitions">
      <p>
        <strong>Contractors:</strong> Persons, partnership, or incorporated business entities duly awarded or assigned by I.V JATAU GLOBAL RESOURCES LTD to perform specific work or contract on behalf of our company and in accordance with the terms and conditions of the work or contract as specified by our company and agreed by the contractor.
      </p>
      <p>
        <strong>Sub-Contractor:</strong> The person, partnership or business entities appointed by the contractor and ratified by I.V JATAU GLOBAL RESOURCES LTD to perform any portion thereof, forming the contract awarded to the contractor by I.V JATAU GLOBAL RESOURCES LTD. Subcontractors are the sole responsibility of the contractor.
      </p>
      <p>
        <strong>Hazard:</strong> Means in relation to a person, anything that may result in injury to the person; or harm to the health of a person.
      </p>
      <p>
        <strong>Induction:</strong> Instruction and training on the health and safety requirements of the workplace.
      </p>
      <p>
        <strong>Equipment:</strong> Any machinery, vehicle, appliance, implement, or tool and any component or fitting thereof or accessory thereto.
      </p>
      <p>
        <strong>Responsible Officer:</strong> A duly authorised I.V JATAU GLOBAL RESOURCES LTD employee assigned and presented to the contractor as the representative of I.V JATAU GLOBAL RESOURCES LTD for the purposes of the contractor.
      </p>
      <p>
        <strong>Risk:</strong> Safety hazard, harm, injury or damage or the probability of any of these occurring at the designated place of work or contract to persons or properties.
      </p>
      <p>
        <strong>Plan:</strong> Written documentation detailing the health and safety policies and procedures that contractors, their management, employees and their Sub-Contractors are required to adhere to.
      </p>
      <p>
        <strong>Contract:</strong> All the work as described and detailed in the contract or other documents, purchase order etc. signed between the parties or any amendment or variation thereto and agreed by the parties.
      </p>
      <p>
        <strong>Workplace:</strong> I.V JATAU GLOBAL RESOURCES LTD project sites, or any other location owned or under the control of I.V JATAU GLOBAL RESOURCES LTD Ltd.
      </p>
      <p>
        <strong>Worksite:</strong> A place, whether or not in an aircraft, ship, vehicle, building, or other structure, where employees work or are likely to be in the course of their work.
      </p>
      <p>
        <strong>Works:</strong> The place(s) as defined in the contract with the contractor where the contractor performs the tasks that it is contracted to perform under a specific agreement. This includes the whole of the work to be executed in accordance with the contract including variations, which by the contract is to be handed over to our company.
      </p>
    </CollapsibleSection>

    <CollapsibleSection title="Responsibilities">
      <p>
        <strong>a. Responsibility of I.V JATAU GLOBAL RESOURCES LTD:</strong> I.V JATAU GLOBAL RESOURCES LTD owes a general duty of care to provide a safe workplace and safe work procedures for all employees, contractors, sub-contractors and their employees. The company's duties at the workplace relate only to those matters over which it has control or can reasonably be expected to have control. This responsibility is passed to the contractor at the commencement of any work. The Responsible Officer shall ensure that the scope of works is clearly defined to the contractor.
      </p>
      <p>
        <strong>b. Responsibility of a Contractor:</strong> The duties of a contractor at the workplace are to undertake the works in a responsible and safe manner and as outlined in the scope of works and contract documentation. The contractor's duties shall relate only to matters assigned by I.V JATAU GLOBAL RESOURCES LTD and within the contractor's control or reasonably expected to be under their control at the site. Contractors engaging other contractors (sub-contractors) must ensure that new employees are familiar with the relevant policies and procedures.
      </p>
    </CollapsibleSection>

    <CollapsibleSection title="Legislative Requirements">
      <p>
        It is the contractor's responsibility to ensure that their employees and sub-contractors comply with all legislative requirements when undertaking work on I.V JATAU GLOBAL RESOURCES LTD projects, subject to the contract terms. If it is brought to the attention of the Responsible Officer that standards, company requirements, or legislative requirements are not being met, the Responsible Officer may, under the contract terms, stop the works until the contractor rectifies the issue. Continued non-compliance may result in:
      </p>
      <ul className="list-disc pl-5">
        <li>Cancellation of the contract.</li>
        <li>Striking the contractor from the Preferred Contractors list.</li>
        <li>Legal action by I.V JATAU GLOBAL RESOURCES LTD.</li>
        <li>Demanding compensation for loss of revenue, extra works, or costs incurred due to transferring the contract.</li>
      </ul>
    </CollapsibleSection>

    <CollapsibleSection title="Policy Requirements (Prior to Commencement of Work)">
      <ul className="list-disc pl-5">
        <li>Confirm with the Responsible Officer that all information regarding the contract works has been received.</li>
        <li>Discuss the necessary health and safety responsibilities with I.V JATAU GLOBAL RESOURCES LTD and agree on them.</li>
        <li>Provide a copy of the Safety Management Plan and all relevant documentation (licenses, permits, etc.).</li>
        <li>Sign and return the Contractor Risk Management Checklist.</li>
      </ul>
      <p>
        The contractor must also analyze risk under the company's guidance. I.V JATAU GLOBAL RESOURCES LTD shall be excluded from liabilities pertaining to matters within the contractor's control or assumed to be under their control.
      </p>
    </CollapsibleSection>

    <CollapsibleSection title="Workplace Procedure (Completion of Work)">
      <p>
        <strong>a. Contracted Work Fully Completed:</strong> When the contract work is fully complete, the contractor must notify the Responsible Officer for a final inspection to ensure the works have met I.V JATAU GLOBAL RESOURCES LTD’s satisfaction. The work site must be left free from hazards.
      </p>
      <p>
        <strong>b. Contracted Work Not Fully Completed:</strong> If the work is not fully complete, the contractor must ensure the site is left in a clean and safe condition. Any waste remaining must be removed at the contractor's expense in an environmentally friendly manner. Failure to leave a safe work site may result in removal from the preferred Contractors register.
      </p>
    </CollapsibleSection>

    <CollapsibleSection title="Our Quality Assurance Statement">
      <p>
        Identifying, outlining, and adhering to all standard contract documents is essential. This includes:
      </p>
      <ul className="list-disc pl-5">
        <li>Reviewing factory test certificates and manufacturer's warranties.</li>
        <li>Sampling and testing of soil, water, concrete works, and other drilling materials.</li>
        <li>Adhering to steel reinforcement design drawings and specifications.</li>
        <li>Following agreed designs and specifications for constructions and drilling works, including quantities, dimensions, elevations, depth, and slopes.</li>
        <li>Undertaking pressure testing of piping works, reservoirs, and tanks (if applicable).</li>
        <li>Performance site testing of installed electrical, mechanical, hydraulic, and water treatment plants (if applicable).</li>
        <li>Conducting commissioning tests (if applicable).</li>
        <li>Recommending alternatives in the best interest of the client.</li>
      </ul>
    </CollapsibleSection>

    <CollapsibleSection title="Reporting Procedures and Guidance">
      <p>
        <strong>Performance Monitoring and Reporting:</strong> Contractors must regularly monitor their health and safety performance and submit the HSE Statistics Monthly Return Form to the Responsible Officer by the 7th day of each calendar month. Findings from reviews, audits, inspections, and other performance monitoring should also be reported.
      </p>
    </CollapsibleSection>

    <CollapsibleSection title="HSE Incidents">
      <p>
        Contractors shall immediately report (within 24 hours) all work-related health and safety incidents/accidents and investigate them in accordance with I.V JATAU GLOBAL RESOURCES LTD procedures for incident investigations, notifications, and follow-up. All incident reports and investigations shall be routed through the contractor. The contractor and HSE officer may be required to attend a review by the I.V JATAU GLOBAL RESOURCES LTD HSE committee, and the contractor must present the investigation results.
      </p>
    </CollapsibleSection>

    <CollapsibleSection title="Reporting Procedure Prior to Commencing Work">
      <ul className="list-disc pl-5">
        <li>Ensure receipt of the Contractor's Safety Management Plan, the Contractor Risk Management Checklist, and any required licenses, permits, or certificates.</li>
        <li>Upon arriving at the premises, follow the designated procedures.</li>
      </ul>
    </CollapsibleSection>

    <CollapsibleSection title="Contracted Work - Completion Procedures">
      <p>
        <strong>a. Contracted Work Fully Completed:</strong> When work is fully complete, the contractor must notify the Responsible Officer for a final inspection. The work site must be left free from hazards.
      </p>
      <p>
        <strong>b. Contracted Work Not Fully Completed:</strong> If work is not fully completed, the contractor must ensure the site is left in a clean and safe condition. Any waste must be removed from the premises at the contractor's expense in an environmentally friendly manner. Failure to do so may result in removal from the preferred Contractors register.
      </p>
    </CollapsibleSection>
  </div>
);

export default ContractorHealthAndSafetyPolicy;
