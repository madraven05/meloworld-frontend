// Report.tsx
import React from "react";
import {
  Document,
  Page,
  View,
  Text,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

// (Optional) register a custom font
// Font.register({ family: "Helvetica-Bold", src: "/fonts/Helvetica-Bold.ttf" });

const styles = StyleSheet.create({
  page: {
    padding: 32,
    fontSize: 12,
    fontFamily: "Helvetica",
    backgroundColor: "#f0f4f8",
  },
  header: {
    fontSize: 24,
    marginBottom: 8,
    color: "#1f4e79",
  },
  subheader: {
    fontSize: 16,
    marginBottom: 6,
    color: "#356094",
  },
  sectionContainer: {
    marginBottom: 16,
    backgroundColor: "#ffffff",
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e1e4e8",
  },
  table: {
    display: "table",
    width: "100%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    overflow: "hidden",
  },
  tableRow: {
    flexDirection: "row",
  },
  tableHeaderRow: {
    backgroundColor: "#356094",
  },
  tableColHeaderPrimary: {
    width: "30%",
    padding: 6,
    borderRightWidth: 1,
    borderColor: "#ccc",
    // justifyContent: "center",
    borderTopLeftRadius: 4,
  },
  tableColHeaderSecondary: {
    width: "100%",
    padding: 6,
    // justifyContent: "center",
    borderTopRightRadius: 4,
  },
  headerText: {
    fontWeight: "bold",
    color: "#ffffff",
  },
  tableRowEven: {
    backgroundColor: "#f8fbfd",
  },
  tableRowOdd: {
    backgroundColor: "#ffffff",
  },
  tableCol: {
    width: "30%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 6,
  },
  tableColLarge: {
    width: "70%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 6,
  },
  tableCell: {
    padding: 5,
    fontSize: 10,
    color: "#2e2e2e",
  },
  scoreText: {
    fontSize: 12,
    color: "#2e2e2e",
  },
  scoreHighlight: {
    fontWeight: "bold",
    color: "#1f4e79",
  },
});

export interface Score {
  value: number;
  level: string;
}

export interface Interpretation {
  level: string;
  description: string;
}

export interface ReportProps {
  trait: string;
  reportTitle: string;
  score: Score;
  description: string;
  interpretations: Interpretation[];
}

const Report: React.FC<ReportProps> = ({
  trait,
  reportTitle,
  score,
  description,
  interpretations,
}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Trait & Title */}
      <Text style={styles.header}>{trait}</Text>
      <Text style={styles.subheader}>{reportTitle}</Text>

      {/* Score */}
      <View style={styles.sectionContainer}>
        <Text style={styles.scoreText}>
          <Text style={styles.scoreHighlight}>Your Score Interpretation: </Text>
          {score.value} – {score.level}
        </Text>
      </View>

      {/* Description */}
      <View style={styles.sectionContainer}>
        <Text style={styles.scoreText}>{description}</Text>
      </View>

      {/* Interpretations Table */}
      <View style={styles.sectionContainer}>
        <Text style={styles.subheader}>Interpretations</Text>
        <View style={styles.table}>
          {/* Header Row */}
          <View style={[styles.tableRow, styles.tableHeaderRow]}>
            <View style={styles.tableColHeaderPrimary}>
              <Text style={styles.headerText}>Level</Text>
            </View>
            <View style={styles.tableColHeaderSecondary}>
              <Text style={styles.headerText}>Description</Text>
            </View>
          </View>

          {/* Data Rows */}
          {interpretations.map((row, i) => (
            <View
              key={i}
              style={[
                styles.tableRow,
                i % 2 === 0 ? styles.tableRowEven : styles.tableRowOdd,
              ]}
            >
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{row.level}</Text>
              </View>
              <View style={styles.tableColLarge}>
                <Text style={styles.tableCell}>{row.description}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);

export default Report;