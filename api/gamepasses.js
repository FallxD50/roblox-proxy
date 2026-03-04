export default async function handler(req, res) {
    const { userId } = req.query;

    if (!userId) {
        return res.status(400).json({ error: "Missing userId" });
    }

    try {
        const response = await fetch(
            `https://inventory.roblox.com/v1/users/${userId}/items/GamePass?limit=50`
        );

        const data = await response.json();

        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ error: "Failed to fetch" });
    }
}
