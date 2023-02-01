import { useState } from "react";
import { Form, Button, OverlayTrigger, Popover } from "react-bootstrap";

const SummaryForm = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>No ice cream will actually be delivered</Popover.Body>
    </Popover>
  );

  const checkboxLabel = (
    <span>
      I agree to
      <OverlayTrigger placement="right" overlay={popover}>
        <span style={{ color: "blue" }}> Terms and Conditions</span>
      </OverlayTrigger>
    </span>
  );
  return (
    <Form>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          checked={isDisabled}
          onChange={() => setIsDisabled((prev) => !prev)}
          type="checkbox"
          label={checkboxLabel}
        />
      </Form.Group>

      <Button disabled={!isDisabled} variant="primary" type="submit">
        Confirm order
      </Button>
    </Form>
  );
};

export default SummaryForm;
