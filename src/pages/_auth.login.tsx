import { FC } from 'react';
import { Button } from '../components/Button';
import { ButtonLink } from '../components/ButtonLink';
import { Textbox } from '../components/form-controls/Textbox';

export const LoginPage: FC = () => {
  return (
    <main className="content mt-8">
      <h1 className="mb-6 text-2xl font-bold">Login</h1>

      <form method="post" className="flex flex-col gap-6">
        <Textbox
          type="email"
          name="email"
          label="E-Mail-Adresse"
          autoComplete="off"
          required
        />

        <Textbox type="password" name="password" label="Passwort" required />

        <div className="rounded-lg bg-red-100 p-3 text-red-900">
          Invalid credentials.
        </div>

        <Button cta large className="w-full" type="submit">
          Einloggen
        </Button>
        <ButtonLink to="/password-reset" tertiary className="w-full">
          Passwort vergessen?
        </ButtonLink>
      </form>
    </main>
  );
};
