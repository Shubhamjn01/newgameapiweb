import { Stack, Typography } from "@mui/material";
import { useOne, useShow } from "@refinedev/core";
import {
  DateField,
  MarkdownField,
  Show,
  TextFieldComponent as TextField,
} from "@refinedev/mui";

export const MapShow = () => {
  const { queryResult } = useShow({});

  const { data, isLoading } = queryResult;

  const record = data?.data;

  const { data: categoryData, isLoading: categoryIsLoading } = useOne({
    resource: "map",
    id: record?.userId || "",
    queryOptions: {
      enabled: !!record,
    },
  });

  return (
    <Show isLoading={isLoading}>
      <Stack gap={1}>
        <Typography variant="body1" fontWeight="bold">
          {"ID"}
        </Typography>
        <TextField value={record?.mapId} />

        <Typography variant="body1" fontWeight="bold">
          {"Map Name"}
        </Typography>
        <TextField value={record?.mapName} />

        <Typography variant="body1" fontWeight="bold">
          {"Current Map Status"}
        </Typography>
        <TextField value={record?.currentMapStatus} />

        <Typography variant="body1" fontWeight="bold">
          {"Map Token"}
        </Typography>
        <TextField value={record?.mapToken} />
        
        <Typography variant="body1" fontWeight="bold">
          {"Map Description"}
        </Typography>
        <TextField value={record?.mapDescription} />

        <Typography variant="body1" fontWeight="bold">
          {"Map Path"}
        </Typography>
        <TextField value={record?.mapPath} />

        <Typography variant="body1" fontWeight="bold">
          {"CreatedAt"}
        </Typography>
        <DateField value={record?.createdAt} />
      </Stack>
    </Show>
  );
};
