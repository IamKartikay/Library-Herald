import React, { useState } from "react";
import copyrightForm from "./copyrightForm.module.css";
import Button from "../Components/Button";

const CopyrightForm = () => {
  const [file, setFile] = useState(null);

  const downloadPdf = async () => {
    try {
      const response = await fetch('http://localhost:5000/download_copyright_form', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/pdf',
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to download PDF');
      }
      console.log(response);
  
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'Copyright-Assignment-Form.pdf');
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
  };

  return (
    <div className="content">
      <div className={copyrightForm.page_content}>
        <section>
          <h1>Copyright Assignment Form</h1>
          <p>
            Please read the notes overleaf. Then complete parts A and B of this
            form, sign and return one to the editor, keeping a copy for
            yourself. If you do not own the copyright to your article, please
            complete Part A and get the copyright holder tFo complete and sign
            part C.
          </p>
        </section>

        <div className={copyrightForm.identation}>
          <section>
            <div className={copyrightForm.rectangle} />
            <h1>Part A</h1>
            <p>
              Name and address of Author (s)’
              ....................................................................................................................
              ....................................................................................................................................................................
              ....................................................................................................................................................................
              <br />
              Phone No............................... Mob.
              No..............................
              Email:............................................................
              <br />
              Title of
              Article.............................................................................................................................................................
              ....................................................................................................................................................................
            </p>
            <p className={copyrightForm.justified}>
              In consideration of the publication of my contribution in the
              above journal, I hereby warrant: (a) that in the case of joint
              authorship I have been authorized by all co-authors to sign this
              agreement of their behalf, and reference to the singular shall
              include the plural as appropriate; (b) that this article is the
              author(s)’original work, has not been previously published
              elsewhere in its final form either in printed or electronic form
              (including Work Wide Web home pages, discussion groups and other
              electronic bulletin boards) and is not under consideration for
              publication elsewhere; (c) that this article contains no violation
              of any existing copyright or other third party right or any
              material of an obscene, libelous or otherwise unlawful nature, and
              that I will indemnify and keep indemnified Delhi Library
              Association (DLA) and, the Editors against all claims and expenses
              (including legal costs and expenses) arising from any breach of
              this warranty and the other warranties on my behalf in this
              agreement; (d) that I have obtained permission for reproduction in
              printer and electronic format and acknowledge the source of any
              illustration, diagrams or other material included the article of
              which I am not the copyright owner.
            </p>
            <p>
              Signed.....................................................................................................
              Date...........................................
            </p>
          </section>

          <section>
            <div className={copyrightForm.rectangle} />
            <h1>Part B</h1>
            <p>
              Signed.....................................................................................................
              Date...........................................
            </p>
          </section>

          <section>
            <div className={copyrightForm.rectangle} />
            <h1>Part C</h1>
            <p>
              Name and address of current copyright holder (if not the author)
              ...........................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
            </p>
            <p>
              The copyright holder hereby grants Delhi Library Association (DLA)
              non-exclusive right to deal with requests from third parties as
              specified overleaf and to published the article in the above
              journal in any format throughout the world (including without
              limitation on an optical disc, transmission over the internet and
              other communications networks, and in any other electronic form)
            </p>
            <p>
              Signed.....................................................................................................
              Date...........................................
            </p>
          </section>

          <section>
            <p className={copyrightForm.justified} id={copyrightForm.last_para}>
              Please return one signed copy of this form to the Editor, Library
              Herald Notes on the assignment of copyright 1. It is the policy of
              the Delhi Library Association (DLA) to acquire copyright in all
              the material published in the Library Herald. Assignment assures
              that requests for permission to reproduce your article in printed
              or electronic media are handled systematically and in accordance
              with a general policy which is aware of the market and any
              relevant changes in international copyright legislation and
              ensures the widest possible dissemination of the journals while
              protecting against possible infringement of the rights of both the
              author and published. 2. The author retains his or her moral
              rights in the article including the right to be identified as the
              author 3. Despite assigning copyright the author retains the right
              to re-use the material in future collections of his/her own work
              without a fee. Acknowledgements of prior publication in the
              Journal and of the copyright-holder are the only requirement in
              such cases. 4. The author may make photocopies of or distribute
              via electronic mail or fax, his/her own work for the author’s own
              teaching and research purposes provided (a) that such copies are
              not resold and (b) that refers to the original source of
              publication and the name of the copyright holder is clearly stated
              in any copies made of the article. 5. The author’s consent will be
              sought to grant permission to any third party (other than DLA) to
              retype set and reprint material in a commercially published edited
              volume (which is assumed to have been given if we have not heard
              from him/her within thirty days of writing to the last known
              address. 6. Should the copyright be held by someone other than the
              author, e. g., the author’s employed, the Published require
              non-exclusive permission to administer requests from third
              parties. Such requests will be handled in accordance with Note 5
              above, and all correspondence will be conducted with the author,
              who is presumed to be authorised by the copyright owner to deal
              with such question on the owner’s behalf. 7. Send your signed copy
              of this form by post (snail mail to: Editor, Library Herald, Delhi
              Library Association. Ranganathan Bhawan, ‘C’ Block, Community
              Centre, Near CGHS Dispensary, Naraina Vihar, New Delhi- 110028,
              India, Email-dlaindia.in (www.dlaindia.in)
            </p>
          </section>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            bgcolor={"#3a54b4"}
            buttonText={"Download PDF"}
            textColor={"white"}
            onClick={downloadPdf}
          />
        </div>
      </div>
    </div>
  );
};

export default CopyrightForm;
