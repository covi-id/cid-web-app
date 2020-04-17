import React, { useState, useEffect } from "react";
import { string, array, bool, func } from "prop-types";
import { Wrapper, Header, List, Item, Icon, Value } from "./styles";
import FormItemWrapper from "components/formItemWrapper";
import { Label, Error } from "components/shared/forms/styles";

const Select = ({ placeholder, items, onSelect, defaultOpen, name, formik, label, disabled, displayProp, valueProp }) => {

  const [open, setOpen] = useState(defaultOpen)
  const [selected, setSelected] = useState(items.find(item => item[valueProp] === formik.initialValues[name]))
  const hasError = !!formik.touched[name] && !!formik.errors[name] && items.length > 0
  const showError = hasError && !open

  useEffect(() => {
    setSelected(items.find(item => item[valueProp] === formik.values[name]))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formik.values[name]])


  function toggle(value) {
    setOpen(value);
    !formik.touched[name] && !value && formik.setFieldTouched(name, true)
  }

  async function handleSelect(selected) {
    setOpen(false)
    setSelected(selected)
    onSelect({ target: { value: selected[valueProp], name } });
  }

  return (
    <FormItemWrapper>
      <Label>{label}</Label>
      <Wrapper>
        <Header active={open} error={showError} onClick={() => toggle(!open)} disabled={disabled}>
          <Value showPlaceholder={!selected}>{selected?.name || placeholder}</Value>
          <Icon
            src={require("assets/images/select-chevron.svg")}
            alt="chevron"
            open={open}
            show={!disabled}
          />
        </Header>
        {open && (
          <List>
            {items.map((item, key) => (
              <Item
                key={key}
                onClick={() => handleSelect(item)}
                selected={selected === item}
              >
                {item[displayProp]}
              </Item>
            ))}
          </List>
        )}
        {<Error show={showError}>{formik.errors[name]}</Error>}
      </Wrapper>
    </FormItemWrapper>
  );
};

Select.propTypes = {
  items: array.isRequired,
  placeholder: string,
  defaultOpen: bool,
  onSelect: func,
  name: string,
  label: string,
  disabled: bool,
  displayProp: string,
  valueProp: string
};

Select.defaultProps = {
  items: [],
  placeholder: "Select",
  defaultOpen: false,
  func: () => {},
  label: "",
  disabled: false,
  displayProp: "name",
  valueProp: "id"
};

export default Select;
