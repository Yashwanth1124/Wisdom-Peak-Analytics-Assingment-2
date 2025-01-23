const Interaction = require('../models/interaction');

exports.createInteraction = async (req, res) => {
  try {
    const { customerId, interactionType, notes } = req.body;
    const interaction = await Interaction.create({ customerId, interactionType, notes });
    res.status(201).json(interaction);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create interaction' });
  }
};

exports.getInteractions = async (req, res) => {
  try {
    const { customerId } = req.query;
    const filters = { customerId };
    const interactions = await Interaction.find(filters);
    res.json(interactions);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve interactions' });
  }
};

exports.updateInteraction = async (req, res) => {
  try {
    const { id } = req.params;
    const { interactionType, notes } = req.body;
    const interaction = await Interaction.findByIdAndUpdate(
      id,
      { interactionType, notes },
      { new: true }
    );
    if (!interaction) return res.status(404).json({ error: 'Interaction not found' });

    res.json(interaction);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update interaction' });
  }
};

exports.deleteInteraction = async (req, res) => {
  try {
    const { id } = req.params;
    const interaction = await Interaction.findByIdAndDelete(id);
    if (!interaction) return res.status(404).json({ error: 'Interaction not found' });

    res.status(204).json({ message: 'Interaction deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete interaction' });
  }
};
