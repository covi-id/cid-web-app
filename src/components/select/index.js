import React, { useState, useEffect } from "react";
import { string, array, bool, func } from "prop-types";
import { Wrapper, Header, List, Item, Icon, Value } from "./styles";
import FormItemWrapper from "components/shared/formItemWrapper";
import FormLabel from "components/shared/formLabel";
import { connect } from "formik";

const Select = ({
  placeholder,
  items,
  onSelect,
  defaultOpen,
  name,
  formik,
  label,
  disabled,
  displayProp,
  valueProp,
  containerStyle
}) => {
  const { setFieldValue } = formik;
  const [open, setOpen] = useState(defaultOpen);
  const [selected, setSelected] = useState(
    items.find(item => item[valueProp] === formik.initialValues[name])
  );
  const hasError =
    !!formik.touched[name] && !!formik.errors[name] && items.length > 0;
  const showError = hasError && !open;

  useEffect(() => {
    setSelected(items.find(item => item[valueProp] === formik.values[name]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formik.values[name]]);

  function toggle(value) {
    setOpen(value);
    !formik.touched[name] && !value && formik.setFieldTouched(name, true);
  }

  async function handleSelect(selected) {
    setOpen(false);
    console.log(selected[valueProp])
    setFieldValue(name, selected[valueProp]);
  }

  return (
    <FormItemWrapper style={containerStyle}>
      {label && (
        <FormLabel
          description={label}
          error={hasError && formik.errors[name]}
          name={name}
        />
      )}
      <Wrapper>
        <Header
          active={open}
          error={showError}
          onClick={() => toggle(!open)}
          disabled={disabled}
        >
          <Value showPlaceholder={!selected}>
            {(selected && selected[displayProp]) || placeholder}
          </Value>
          <Icon
            src={require("assets/images/chevron.svg")}
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

export default connect(Select);
