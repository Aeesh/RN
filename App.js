import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { TokenVerifier } from 'jsontokens';

const useVcCheck = () => {
  const publicKey = "0391002fdad437d3b9f302f95ba892834d9d37043c903a8802e69dc2b6b9f814d9"
  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksifQ.eyJpc3MiOiJkaWQ6b255eGlkZW50aXR5OmVjZmFFYzU1Rjk0RTgzRDhmOTA2NmE5NDI5NUI0N0JDN0FmRWY3ODYiLCJzdWIiOiJkaWQ6b255eGlkZW50aXR5OmVjZmFFYzU1Rjk0RTgzRDhmOTA2NmE5NDI5NUI0N0JDN0FmRWY3ODYiLCJleHAiOjE3MDE3Nzg0NzIsIm5iZiI6MTY3MDI0MjQ3MiwiaWF0IjoxNjcwMjQyNDcyLCJqdGkiOiJkaWQ6b255eGlkZW50aXR5OjU3MUZjZmNmMjE1NjYxMzNjQzlkQzU5NTJCNWYwYjNjOTgwNDYwNTQiLCJ2YyI6eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSJdLCJpZCI6ImRpZDpvbnl4aWRlbnRpdHk6NTcxRmNmY2YyMTU2NjEzM2NDOWRDNTk1MkI1ZjBiM2M5ODA0NjA1NCIsInR5cGUiOlsiVmVyaWZpYWJsZUNyZWRlbnRpYWwiLCJTeXN0ZW1Sb290Il0sImNyZWRlbnRpYWxTdWJqZWN0Ijp7Im5hbWUiOiJSb290IiwiaWQiOiJkaWQ6b255eGlkZW50aXR5OmVjZmFFYzU1Rjk0RTgzRDhmOTA2NmE5NDI5NUI0N0JDN0FmRWY3ODYifSwiaXNzdWVyIjp7ImlkIjoiZGlkOm9ueXhpZGVudGl0eTplY2ZhRWM1NUY5NEU4M0Q4ZjkwNjZhOTQyOTVCNDdCQzdBZkVmNzg2IiwicHVibGljS2V5IjoiMDM5MTAwMmZkYWQ0MzdkM2I5ZjMwMmY5NWJhODkyODM0ZDlkMzcwNDNjOTAzYTg4MDJlNjlkYzJiNmI5ZjgxNGQ5In0sImlzc3VhbmNlRGF0ZSI6IjIwMjItMTItMDVUMTI6MTQ6MzIuMDAwWiIsImV4cGlyYXRpb25EYXRlIjoiMjAyMy0xMi0wNVQxMjoxNDozMi4wMDBaIiwiY3JlZGVudGlhbFN0YXR1cyI6eyJpZCI6ImRpZDpvbnl4aWRlbnRpdHk6NTcxRmNmY2YyMTU2NjEzM2NDOWRDNTk1MkI1ZjBiM2M5ODA0NjA1NCIsInR5cGUiOiJvbnl4aWRlbnRpdHkifSwicHJvb2YiOlt7InR5cGUiOiJPbkNoYWluUHJvb2ZTZWNwMjU2azEiLCJjcmVhdGVkIjoiMjAyMi0xMi0wNVQxMjoxNDozMi4xODBaIiwidmVyaWZpY2F0aW9uTWV0aG9kIjoiZGlkOm9ueXhpZGVudGl0eTplY2ZhRWM1NUY5NEU4M0Q4ZjkwNjZhOTQyOTVCNDdCQzdBZkVmNzg2IiwicHJvb2ZQdXJwb3NlIjoiQXNzZXJ0aW9uTWV0aG9kIiwicHJvb2ZWYWx1ZSI6IjB4OTUxNzUzZjY0YWEyYjI3OTA2ZjE1NGNjMTZkYzc4MzI2ZGZmMzdkMmUwOTUyYjI5YmIyNmFhZjIzODBmZjlkZjZkMWNlMmExNzdlNjNlYmNjNDMzNjVjMzA4MzgzNjU0ZTBmZjYxN2VhYzM0Y2I1NzEyMjI0NDA3ZTk4ZjBmNWYxYiJ9XX19.kFOpOPCPzdEuQBM1I7DzZhRgCf7EbPOjfrsMOEZhSowhMK074FWtGv_1X7Id-pl8i_Q9JyrQXDUntWIjy5PvJw"

    try {
      const result = new TokenVerifier("ES256K", publicKey).verify(token)
      console.log("result", result)
    } catch (error) {
      console.log("error", error)
    }
}

export default function App() {
  useVcCheck()
  return (
    <View style={styles.container}>
      <Text>Hello there!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
