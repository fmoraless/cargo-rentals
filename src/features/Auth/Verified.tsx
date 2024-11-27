import { Alert, Button, Divider, Flex } from '@mantine/core'
import { IconChecks } from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'

export const Verified = () => {
  return (
    <Flex mih="300px" justify="center" align="center">
        <Alert
            icon={<IconChecks />}
            title="Your email is verified"
            color="green"
            w={{ base: '90%', md: '60%' }}
        >
            You can now login to your account
        <Divider my="lg" />
        <Button component={Link} href="/login">
            Login
        </Button>
        </Alert>
    </Flex>
  );
}
