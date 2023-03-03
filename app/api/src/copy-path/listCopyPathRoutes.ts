import { CopyPathDto } from "./copyPathDto";
import { Router } from "express";
import { AppDataSource } from "../data-source";
import { CopyPath } from "../entity/copyPath";
const router = Router();

router.get("/list", async (req, res) => {
    try {
        const data = await AppDataSource.manager.find(CopyPath);
        if (!data) {
            res.status(500).json({ error: "Failed to read file" });
            return;
        }

        const copyPathsDto: CopyPathDto[] = data.flatMap((x: CopyPath) => ({
            id: x.id,
            name: x.name,
            source: x.source,
            destination: x.destination,
            includeFilesOnly: JSON.parse(x.includeFiles),
            excludeDirectories: JSON.parse(x.excludedDirectories),
            excludeFiles: JSON.parse(x.excludedFiles),
        }));

        res.json(copyPathsDto);
    } catch (error) {
        res.status(400).json();
    }
});

export default router;
