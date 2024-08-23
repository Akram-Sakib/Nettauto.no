import Container from "../ui/container";
import InfoSenterFeature from "./infosenter-feature";

const InfoSenterFeatures = () => {
  return (
    <section className="py-32">
      <Container className="grid grid-cols-3 gap-y-32 gap-x-10">
        <InfoSenterFeature />
        <InfoSenterFeature />
        <InfoSenterFeature />
        <InfoSenterFeature />
        <InfoSenterFeature />
        <InfoSenterFeature />
      </Container>
    </section>
  );
};

export default InfoSenterFeatures;
