import Navbar from "../../components/navbar/Navbar";
import TrackingBar from "../../components/trackingBar/TrackingBar";

import { FaTruck, FaShoppingCart, FaCreditCard, FaFlag } from "react-icons/fa";

export default function HomePage() {
  const steps = [
    { label: "Items", icon: FaShoppingCart },
    { label: "Delivery", icon: FaTruck },
    { label: "Payment", icon: FaCreditCard },
    { label: "Finish", icon: FaFlag },
  ];

  return (
    <div className="divDebug">
      <Navbar type={"secondary"} itensInCart={2} />
      <p className="pDebug">Página inicial</p>
      <div style={{ width: "80%", marginTop: "30px"}}>
        <TrackingBar steps={steps} currentStep={3} />
      </div>
    </div>
  );
}