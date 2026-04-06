export default function Speaking() {
  return null;
}

export function getServerSideProps() {
  return {
    redirect: {
      destination: "/projects",
      permanent: false,
    },
  };
}
