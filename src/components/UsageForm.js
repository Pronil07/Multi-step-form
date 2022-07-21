import React, { useContext } from "react";
import classes from "./css/Form.module.css";
import { UserGroupIcon, UserIcon } from "@heroicons/react/solid";
import FormContext from "../store/form-context";

function UsageForm() {
  const usage = [
    {
      id: "1",
      icon: <UserIcon className={classes.icon} />,
      title: "For myself",
      desc: "Write better. Think more clearly. Stay Organized",
    },
    {
      id: "2",
      icon: <UserGroupIcon className={classes.icon} />,
      title: "With my team",
      desc: "Wikis, docs, tasks & projects, all in one place.",
    },
  ];

  const { setFormData, formData, setValidation } = useContext(FormContext);

  const insertUsage = (id) => {
    setFormData((prevData) => ({ ...prevData, usage: id }));
    setValidation((prevData) => ({ ...prevData, usage: true }));
  };

  return (
    <>
      <span className={`${classes.container} ${classes.headings}`}>
        <h1>How are you planning to use Eden?</h1>
        <p>We'll streamline your setup experience accordingly.</p>
      </span>

      <div className={classes.container_row}>
        {usage.map((item) => (
          <div
            key={item.id}
            className={`${classes.useCard} ${
              formData.usage === item.id ? classes.active : ""
            }`}
            onClick={() => insertUsage(item.id)}
          >
            {item.icon}
            <h4 className={classes.title}>{item.title}</h4>
            <p className={classes.desc}>{item.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default UsageForm;
