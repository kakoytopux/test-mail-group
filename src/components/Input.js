import React from "react";

export default function Input() {
  return (
    <article className="mess-field">
      <div className="mess-field__field" contentEditable data-placeholder="Type messsage"></div>
      <div className="mess-field__container">
        <button type="button" className="mess-field__icon mess-field__icon_type_regular"></button>
        <button type="button" className="mess-field__icon mess-field__icon_type_res"></button>
      </div>
    </article>
  );
}