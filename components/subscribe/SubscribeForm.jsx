import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";

function SubscribeForm() {
  const buttonColorScheme = useColorModeValue("blackAlpha", "gray");
  // 1. Create a reference to the input so we can fetch/clear it's value.
  const inputEl = useRef(null);
  // 2. Hold a message in state to handle the response from our API.
  const [message, setMessage] = useState("");

  const subscribe = async (e) => {
    e.preventDefault();

    if (inputEl.current.value.includes("test")) {
      setMessage("Test mail? hmmm... Sobodno se prijavite, obećavamo da nećemo spamovati sanuče. :)");
    } else {
      // 3. Send a request to our API with the user's email address.
      const res = await fetch("/api/subscribe", {
        body: JSON.stringify({
          email: inputEl.current.value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();

      if (error) {
        // 4. If there was an error, update the message in state.
        setMessage(error);

        return;
      }

      // 5. Clear the input value and show a success message.
      inputEl.current.value = "";
      setMessage("Uspešno ste prijavljeni na naš newsletter! 🎉 ");
    }
  };

  return (
    <form onSubmit={subscribe}>
      <FormControl>
        <FormLabel htmlFor="email-input">Email adresa</FormLabel>
        <Input
          id="email-input"
          name="email"
          placeholder="you@awesome.com"
          ref={inputEl}
          required
          type="email"
        />
        <FormHelperText>
          {message
            ? message
            : `Poslaćemo email samo kad se objavi novi članak.`}
        </FormHelperText>
        <Button type="submit" w="full" mt="4" colorScheme={buttonColorScheme}>
          ✨ Prijavi se 💌
        </Button>
      </FormControl>
    </form>
  );
}

export default SubscribeForm;
