import React from "react";
import type { NextPage } from "next";
import {
  Grid,
  Box,
  Typography,
  Card,
  Stack,
  CardMedia,
  CardContent,
  Container,
  Paper,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Home.module.css";
import { ClassNames } from "@emotion/react";
import { textAlign } from "@mui/system";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next GraphQL Movies</title>
        <meta name="description" content="Next Movie App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container maxWidth="xl">
          <Typography variant="h1" gutterBottom sx={{ textAlign: "center" }}>
            Next GraphQL
          </Typography>
          <Grid container spacing={2}>
            {Array.from(Array(12)).map((a, index) => (
              <Grid item md={6} key={index}>
                <Card key={`card-${a}`}>
                  <Stack>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Title
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </Typography>
                    </CardContent>
                  </Stack>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </div>
  );
};

// Implementation
const PREFIX = "container";

const classes = {
  root: `${PREFIX}-root`,
};

const RootGrid = styled(Grid)`
  justify-content: center;
`;

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

// const Root = styled("div")(({ theme }) => {
//   return {
//     [`&.${classes.root}`]: {
//       margin: theme.spacing(1),
//     },
//   };
// });

export default Home;
