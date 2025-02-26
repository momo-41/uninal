"use client";

import { useState } from "react";
import {
  Button,
  Box,
  TextField,
  Typography,
  Card,
  CardContent,
  CardHeader,
  AppBar,
  Toolbar,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ReflectionApp() {
  const [currentGoal, setCurrentGoal] = useState("");
  const [sections, setSections] = useState([
    { id: 1, title: "やったこと", content: "" },
  ]);

  const addSection = () => {
    const newId = sections.length + 1;
    setSections([
      ...sections,
      { id: newId, title: `新しい項目 ${newId}`, content: "" },
    ]);
  };

  const updateSection = (id: number, field: string, value: string) => {
    setSections(
      sections.map((section) =>
        section.id === id ? { ...section, [field]: value } : section
      )
    );
  };

  const deleteSection = (id: number) => {
    setSections(sections.filter((section) => section.id !== id));
  };

  return (
    <Box height={"100vh"}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Typography ml={4} fontSize={23} flexGrow={1}>
            Uninal
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ maxWidth: 800, mx: "auto", my: 4 }}>
        {/* <Typography variant="h5" align="center" gutterBottom>
          振り返りアプリ
        </Typography> */}

        <Card sx={{ mb: 2 }}>
          <CardContent>
            <Typography fontSize={20} mr={1.5} mb={2}>
              今の目標
            </Typography>
            <TextField
              placeholder="あなたの目標を入力してください"
              fullWidth
              value={currentGoal}
              onChange={(e) => setCurrentGoal(e.target.value)}
              multiline
            />
          </CardContent>
        </Card>

        {sections.map((section) => (
          <Card key={section.id} sx={{ mb: 2 }}>
            <CardContent>
              <TextField
                variant="outlined"
                fullWidth
                value={section.title}
                onChange={(e) =>
                  updateSection(section.id, "title", e.target.value)
                }
                sx={{ mb: 1 }}
              />
              <TextField
                placeholder="内容を入力してください"
                fullWidth
                multiline
                value={section.content}
                onChange={(e) =>
                  updateSection(section.id, "content", e.target.value)
                }
              />
              <Button
                color="error"
                onClick={() => deleteSection(section.id)}
                startIcon={<DeleteIcon />}
              >
                削除
              </Button>
            </CardContent>
          </Card>
        ))}

        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={addSection}
            startIcon={<AddIcon />}
          >
            新しい項目を追加
          </Button>
          <Button variant="contained" color="success" startIcon={<SaveIcon />}>
            保存
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
