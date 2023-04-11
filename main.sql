
WITH affected_rows AS (
    SELECT *
    FROM playactioncontent
    WHERE body LIKE '%https://eusp01tedattachment0887.blob.core.windows.net%'
)

UPDATE playactioncontent
SET body = new_body
WHERE id = row.id

