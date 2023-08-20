"use client";
import { Header } from "@/src/components/Header";
import { redirectToLogin } from "@/src/util/api";
import { Button, Spinner } from "@chakra-ui/react";
import { useSession } from "next-auth/react";

const ManagePage = () => {
  const { data: session, status } = useSession();

  if (status === "unauthenticated") {
    return redirectToLogin();
  }
  if (status === "loading")
    return (
      <Spinner speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
    );

  if (status === "authenticated")
    return (
      <>
        <div>
          <Header />
          <h1>Admin Page</h1>
          <Button>hoge</Button>
        </div>
      </>
    );
};

export default ManagePage;
