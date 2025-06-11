// UTILS
import { useTranslation } from 'react-i18next'
import { Tailwind } from '@react-email/tailwind'

// COMPONENTS
import { Html, Container, Text, Img, Body } from '@react-email/components'

export type ContactUsEmailProps = {
  fullName: string
  email: string
  subject: string
  message: string
}

export function ContactUsEmail({
  fullName,
  email,
  subject,
  message,
}: ContactUsEmailProps) {
  const { t } = useTranslation()

  return (
    <Html lang="en" dir="ltr">
      <Tailwind>
        <Body className="bg-gray-900 font-sans text-gray-300">
          <div className="bg-gray-800 py-6">
            <a href="https://mujerautomotriz.com/" rel="noreferrer" target="_blank">
              <Img
                src="https://mujerautomotriz.com/images/logo/mujer-automotriz-long-dark.png"
                alt="Mujer Automotriz"
                className="mx-auto w-64"
              />
            </a>
          </div>

          <div className="bg-gray-800 py-8 px-4 text-center shadow-sm">
            <h4 className="text-3xl font-bold text-white">
              {t('Hello')}, {t('you have received a new contact message')}
            </h4>
          </div>

          <Container
            className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 mx-auto max-w-2xl my-8"
          >
            <h3 className="text-xl mb-4 font-semibold text-gray-100 border-b pb-2 border-gray-700">
              {t('Message details')}:
            </h3>
            <Text className="mb-3 text-base text-gray-300"><strong>{t('Full Name')}:</strong> {fullName}</Text>
            <Text className="mb-3 text-base text-gray-300"><strong>{t('Email')}:</strong> {email}</Text>
            <Text className="mb-3 text-base text-gray-300"><strong>{t('Subject')}:</strong> {subject}</Text>
            <Text className="mb-3 text-base text-gray-300"><strong>{t('Message')}:</strong> {message}</Text>
          </Container>
          <Img
            src="https://mujerautomotriz.com/images/backgrounds-abstract/background-hands.png"
            alt="Fondo Abstracto"
            className="mx-auto w-full max-w-2xl block mt-12"
            style={{ maxWidth: '600px', height: 'auto' }}
          />
          <div className="my-8 text-center text-xs text-gray-400">
            <p>{t('Sent with ❤️ by Mujer Automotriz')}</p>
            <p className="mt-1">{t('©2025 Mujer Automotriz. All rights reserved.')}</p>
          </div>
        </Body>
      </Tailwind>
    </Html>
  )
}