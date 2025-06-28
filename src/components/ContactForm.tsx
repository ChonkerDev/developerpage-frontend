import { TextInput, Textarea, Button, Group, Box, rem } from '@mantine/core';
import { TUseForm, useForm as useSpreeForm, ValidationError } from '@formspree/react';
import classes from './ContactForm.module.css';

export default function ContactForm() {
    const [state, handleSubmit] = useContactForm({mock: false});

    if (state.succeeded) {
        return <div>
            <img src="/logo.png" alt="Logo" className={classes.responsiveImage}/>
            <p className={classes.responseText}>Thanks for your message!</p>
            </div>;
    }

    return (
        <form onSubmit={handleSubmit} className={classes.formContainer}>

            <TextInput
                label="Email Address"
                id="email"
                type="email"
                name="email"
                required
                className={classes.inputField}
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />

            <Textarea
                label="Message"
                id="message"
                name="message"
                required
                autosize
                minRows={3}
                className={classes.textareaField}
                styles={{
                    input: {
                        resize: 'vertical',
                        width: '50vw',
                        maxWidth: 600,
                        minWidth: 300,
                        margin: '0 auto',
                        display: 'block',
                        boxSizing: 'border-box',
                    }
                }}
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />

            <div className={classes.buttonGroup}>
                <Button type="submit" disabled={state.submitting}>
                    Submit
                </Button>
            </div>
        </form>
    );
}

type ContactFormFields = {
  name: string;
  email: string;
  message: string;
};


const mockResult: TUseForm<ContactFormFields> = [
  {
    errors: null,
    result: {
      kind: "success", 
      next: "thanks",
    },
    submitting: false,
    succeeded: true,
  },
  async () => {
    console.log("Mock submit triggered");
    return;
  },
  () => {
    console.log("Mock reset triggered");
  }
];

export function useContactForm({ mock = false } = {}): TUseForm<ContactFormFields> {
  if (mock) {
    return mockResult;
  }

  return useSpreeForm<ContactFormFields>("mnnvlvzn");
}