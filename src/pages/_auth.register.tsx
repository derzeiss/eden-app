import { FC } from 'react';
import { Textbox } from '../components/form-controls/Textbox';
import { Checkbox } from '../components/form-controls/Checkbox';
import { Button } from '../components/Button';
import { ButtonLink } from '../components/ButtonLink';
import z from 'zod';

const payloadSchema = z
  .object({
    email: z.email(),
    password: z
      .string()
      .min(8)
      .regex(/[A-Z]+/, 'At least one upper')
      .regex(/[a-z]+/, 'At least one lower')
      .regex(/[!$%&/=?,.-]+/, 'At least one special char'),
    passwordConfirm: z.string(),
    agb: z.string(),
    newsletter: z.boolean().optional(),
  })
  .superRefine(({ password, passwordConfirm }, ctx) => {
    if (password !== passwordConfirm) {
      ctx.addIssue({
        code: 'custom',
        message: 'The passwords did not match',
        path: ['confirmPassword'],
      });
    }
  });

if (!payloadSchema) console.log(payloadSchema); // just to remove unused-var warnings

export const RegisterPage: FC = () => {
  return (
    <main className="content mt-8">
      <h1 className="mb-6 text-2xl font-bold">Register</h1>

      <form method="post" className="space-y-6">
        <Textbox
          type="email"
          name="email"
          label="E-Mail-Adresse"
          autoComplete="off"
          required
        />
        <Textbox
          type="password"
          name="password"
          label="Passwort"
          autoComplete="off"
          required
          description={
            <>
              Mindestanforderungen für dein Passwort:
              <ul className="list-disc pl-4">
                <li>min. 8 Zeichen</li>
                <li>min. ein Groß- & Kleinbuchstabe</li>
                <li>min. eine Zahl</li>
                <li>min. ein Sonderzeichen (!$%&/=?,.-)</li>
              </ul>
            </>
          }
        />
        <Textbox
          type="password"
          name="passwordConfirm"
          label="Passwort bestätigen"
          autoComplete="off"
          required
        />

        <Checkbox
          name="agb"
          required
          label={
            <span>
              Ich stimme zu, dass das Eden Culture meine Daten gemäß der{' '}
              <a
                href="https://eden-fest.de/datenschutz/"
                className="text-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Datenschutzerklärung
              </a>{' '}
              verarbeiten und speichern darf.
            </span>
          }
        />

        <div className="space-y-3">
          <Button cta large className="w-full" type="submit">
            Registrieren
          </Button>
          <ButtonLink tertiary className="w-full" to="/login">
            Abbrechen
          </ButtonLink>
        </div>
      </form>
    </main>
  );
};
