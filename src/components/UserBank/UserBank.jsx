import "./UserBank.css";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { FaBitcoin, FaRegCopy } from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";
import { BsBank, BsBank2 } from "react-icons/bs";

const UserBank = ({ user }) => {
  const copyToClipBoard = async (copy) => {
    try {
      await navigator.clipboard.writeText(copy);
      toast.success("Copied to Clipboard!");
    } catch (error) {
      toast.error("Error in copying !");
    }
  };

  return (
    <section className="useraccessory-section">
      <div>
        <h2 className="headingtitle flex">
          <BsBank className="singleusericon" />
          User Bank Info
        </h2>
      </div>

      <div className="banksection">
        {/* Box-1 */}
        <div className="bankaccountbox">
          <div className="">
            <BsBank2 className="accounticon" />
          </div>
          <div>
            <h2 className="banktitle">Account Details</h2>
          </div>
          <div>
            <h2 className="banktext">
              Currency available : {user.bank.currency}
            </h2>
          </div>
          <div>
            <h2 className="banktext flex">
              Account number : {user.bank.iban}
              <FaRegCopy
                className="clipboard"
                onClick={() => {
                  copyToClipBoard(user.bank.iban);
                }}
              />
            </h2>
          </div>
          <div>
            <h2 className="banktext">Card Type : {user.bank.cardType}</h2>
          </div>
          <div>
            <h2 className="banktext">Card Number : {user.bank.cardNumber}</h2>
          </div>
          <div>
            <h2 className="banktext">Card Expiry : {user.bank.cardExpire}</h2>
          </div>
        </div>
        {/* Box-2*/}
        <div className="bankaccountbox">
          <div className="">
            <FaBitcoin className="accounticon" />
          </div>
          <div>
            <h2 className="banktitle">Cryto Account Details</h2>
          </div>
          <div>
            <h2 className="banktext">Coin name : {user.crypto.coin}</h2>
          </div>
          <div>
            <h2 className="banktext flex">
              Wallet address : {user.crypto.wallet}{" "}
              <FaRegCopy
                className="clipboard"
                onClick={() => {
                  copyToClipBoard(user.crypto.wallet);
                }}
              />
            </h2>
          </div>
          <div>
            <h2 className="banktext">Network : {user.crypto.network}</h2>
          </div>
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </section>
  );
};

export default UserBank;
