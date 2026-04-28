import Navbar from "../../components/common/navbar/Navbar";
import TrackingBar from "../../components/common/trackingBar/TrackingBar";

import { FaTruck, FaShoppingCart, FaCreditCard, FaFlag } from "react-icons/fa";

export default function HomePage() {
  const steps = [
    { label: "Items", icon: FaShoppingCart, updateDate: "10/03/2026 - 16:34" },
    { label: "Payment", icon: FaCreditCard, updateDate: "11/03/2026 - 01:13" },
    { label: "Delivery", icon: FaTruck },
    { label: "Finish", icon: FaFlag},
  ];

  return (
    <div className="divDebug">
      <Navbar type={"secondary"} itensInCart={2} />
      <p className="pDebug">Página inicial</p>
      <div style={{ width: "80%", marginTop: "30px"}}>
        <TrackingBar steps={steps} />
      </div>
    </div>
  );
}