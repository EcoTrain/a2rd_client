import React, {useCallback, useEffect, useMemo, useState} from "react";
import ClockLoader from "react-spinners/ClockLoader";
import {useTranslation} from "react-i18next";

import {toast} from "react-toastify";

import CustomDrawer from "../../../components/Modal/Drawer";
import CustomModal from "../../../components/Modal/Simple";
import FormField from "./FormField";
import "./feedback.scss";
import config from "../../../config";

const FeedbackOrder = ({children, className, style}) => {
  const {t} = useTranslation("feedback");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 960);

  useEffect(() => {
    const resizeHandler = () => {
      const isWide = window.innerWidth > 960;
      if (isMobile && isWide) {
        setIsMobile(false);
      } else if (!isMobile && !isWide) {
        setIsMobile(true);
      }
    };
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [isMobile]);

  const isFormValid = () => {
    const validateEmail = (email) => {
      return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    };

    if (!email || !name || !text) {
      toast.error(t("validate.fillAll"));
      return false;
    } else if (!validateEmail(email)) {
      toast.error(t("validate.incorrectEmail"));
      return false;
    } else return true;
  };

  const handleClose = () => setOpen(false);
  const handleSubmit = (event) => {
    event.preventDefault();

    const onSuccess = () => {
      setEmail("");
      setName("");
      setText("");
      toast.success(t("success"));
    };

    const onError = (err) => {
      console.log("Feedback error", err);
      toast.error(t("fail"));
    };

    const url = config.SERVER_URL + "/api/send_email";
    const body = {
      email,
      name,
      text,
    };

    if (isFormValid()) {
      setLoading(true);
      fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(body),
      })
        .then(onSuccess)
        .catch(onError)
        .finally(() => setLoading(false));
    }
  };

  const getContent = () => {
    const getForm = () => {
      return (
        <form onSubmit={handleSubmit}>
          <FormField
            tag={"input"}
            title={t("field.email")}
            type={"email"}
            value={email}
            onChange={setEmail}
          />
          <FormField
            tag={"input"}
            title={t("field.name")}
            type={"name"}
            value={name}
            onChange={setName}
          />
          <FormField
            tag={"textarea"}
            title={t("field.text")}
            type={"text"}
            value={text}
            onChange={setText}
          />
          <input type="submit" value={t("submit")} className="font-size-4" />
        </form>
      );
    };

    return (
      <div id="feedbackForOrder">
        <div className="description">{t("label")}</div>
        {getForm()}
        {loading && (
          <div className="waiter">
            <ClockLoader
              color={"black"}
              loading={loading}
              css={{
                display: "block",
                margin: "0 auto",
                borderColor: "black",
              }}
              size={100}
            />
          </div>
        )}
      </div>
    );
  };
  const getTitle = () => <div className="font-size-3">{t("title")}</div>;

  return (
    <>
      <button
        className={`btn-outline ${className}`}
        style={style}
        onClick={() => setOpen(true)}
      >
        {children || "Request feedback"}
      </button>

      {isMobile ? (
        <CustomDrawer title={getTitle()} open={open} onClose={handleClose}>
          {getContent()}
        </CustomDrawer>
      ) : (
        <CustomModal title={getTitle()} open={open} onClose={handleClose}>
          {getContent()}
        </CustomModal>
      )}
    </>
  );
};

export default FeedbackOrder;
