// import {
//     Body,
//     Container,
//     Column,
//     Head,
//     Html,
//     Img,
//     Link,
//     Preview,
//     Row,
//     Section,
//     Text,
//   } from "@react-email/components";
//   import * as React from "react";
//   import {useContext} from "react"
//   import Context from "../context/StateContext";
//   import logo1 from '../assets/logo.jpg';
  

//   export const EmailSample = () => {

//     const {
//         firstName,
//         lastName,
//         email,
//         phone,
//         message,
//       } = useContext(Context);
  
//     return (
//       <Html>
//         <Head />
//         <Preview>You updated the password for your Twitch account</Preview>
//         <Body style={main}>
//           <Container style={container}>
//             <Section style={logo}>
//               <Img width={114} src={logo1} alt="Library Herald"/>
//             </Section>
//             <Section style={sectionsBorders}>
//               <Row>
//                 <Column style={sectionBorder} />
//                 <Column style={sectionCenter} />
//                 <Column style={sectionBorder} />
//               </Row>
//             </Section>
//             <Section style={content}>
//               <Text style={paragraph}>Hi,</Text>
//               <Text style={paragraph}>
//                 {message}
//               </Text>
//               <Text style={paragraph}>
//                 Sender Information
//                 <br />
//                 Name:{" "}{firstName}{" "}{lastName}
//                 Phone No:{" "}{phone}
//                 Email:{" "}{email}
//                 Library Hearld
//               </Text>
//             </Section>
//           </Container>
  
//           <Section style={footer}>
//             <Row>
//               <Text style={{ textAlign: "center", color: "#706a7b" }}>
//                 Library Herald
//               </Text>
//             </Row>
//           </Section>
//         </Body>
//       </Html>
//     );
//   };
  
//   const fontFamily = "HelveticaNeue,Helvetica,Arial,sans-serif";
  
//   const main = {
//     backgroundColor: "#efeef1",
//     fontFamily,
//   };
  
//   const paragraph = {
//     lineHeight: 1.5,
//     fontSize: 14,
//   };
  
//   const container = {
//     maxWidth: "580px",
//     margin: "30px auto",
//     backgroundColor: "#ffffff",
//   };
  
//   const footer = {
//     maxWidth: "580px",
//     margin: "0 auto",
//   };
  
//   const content = {
//     padding: "5px 20px 10px 20px",
//   };
  
//   const logo = {
//     display: "flex",
//     justifyContent: "center",
//     alingItems: "center",
//     padding: 30,
//   };
  
//   const sectionsBorders = {
//     width: "100%",
//     display: "flex",
//   };
  
//   const sectionBorder = {
//     borderBottom: "1px solid rgb(238,238,238)",
//     width: "249px",
//   };
  
//   const sectionCenter = {
//     borderBottom: "1px solid rgb(145,71,255)",
//     width: "102px",
//   };
  
//   const link = {
//     textDecoration: "underline",
//   };
  


import {
    Body,
    Container,
    Column,
    Head,
    Html,
    Img,
    Link,
    Preview,
    Row,
    Section,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  

  export const TwitchResetPasswordEmail = () => {

  
    return (
      <Html>
        <Head />
        <Preview>You updated the password for your Twitch account</Preview>
        <Body style={main}>
          <Container style={container}>
            <Section style={sectionsBorders}>
              <Row>
                <Column style={sectionBorder} />
                <Column style={sectionCenter} />
                <Column style={sectionBorder} />
              </Row>
            </Section>
            <Section style={content}>
              <Text style={paragraph}>Hi,</Text>
              <Text style={paragraph}>
                You updated the password for your Twitch account on{" "}
               . If this was you, then no further action is
                required.
              </Text>
              <Text style={paragraph}>
                However if you did NOT perform this password change, please{" "}
                immediately.
              </Text>
              <Text style={paragraph}>
                Remember to use a password that is both strong and unique to your
                Twitch account. To learn more about how to create a strong and
                unique password,{" "}
              </Text>
              <Text style={paragraph}>
                Still have questions? Please contact{" "}
              </Text>
              <Text style={paragraph}>
                Thanks,
                <br />
                Twitch Support Team
              </Text>
            </Section>
          </Container>
  
          <Section style={footer}>

            <Row>
              <Text style={{ textAlign: "center", color: "#706a7b" }}>
                © 2022 Twitch, All Rights Reserved <br />
                350 Bush Street, 2nd Floor, San Francisco, CA, 94104 - USA
              </Text>
            </Row>
          </Section>
        </Body>
      </Html>
    );
  };
  
  
  const fontFamily = "HelveticaNeue,Helvetica,Arial,sans-serif";
  
  const main = {
    backgroundColor: "#efeef1",
    fontFamily,
  };
  
  const paragraph = {
    lineHeight: 1.5,
    fontSize: 14,
  };
  
  const container = {
    maxWidth: "580px",
    margin: "30px auto",
    backgroundColor: "#ffffff",
  };
  
  const footer = {
    maxWidth: "580px",
    margin: "0 auto",
  };
  
  const content = {
    padding: "5px 20px 10px 20px",
  };
  
  const logo = {
    display: "flex",
    justifyContent: "center",
    alingItems: "center",
    padding: 30,
  };
  
  const sectionsBorders = {
    width: "100%",
    display: "flex",
  };
  
  const sectionBorder = {
    borderBottom: "1px solid rgb(238,238,238)",
    width: "249px",
  };
  
  const sectionCenter = {
    borderBottom: "1px solid rgb(145,71,255)",
    width: "102px",
  };
  
  const link = {
    textDecoration: "underline",
  };
  