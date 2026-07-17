import Folder from "../models/folder.js";

// CREATE
export const createFolder = async (req,res) => {

  try {

    const folder = await Folder.create({

        name: req.body.name,

        user: req.user.id,

      });

    res.status(201).json(
      folder
    );

  } catch (error) {

    res.status(500).json({

      message: error.message,

    });

  }

};


// GET ALL

export const getFolders = async (
  req,
  res
) => {

  try {

    const folders =
      await Folder.find({

        user: req.user.id,

      });

    res.json(folders);

  } catch (error) {

    res.status(500).json({

      message: error.message,

    });

  }

};


// DELETE

export const deleteFolder =
  async (req, res) => {

    try {

      await Folder.findByIdAndDelete(
        req.params.id
      );

      res.json({

        message:
          "Folder deleted",

      });

    } catch (error) {

      res.status(500).json({

        message:
          error.message,

      });

    }

  };


// UPDATE

export const updateFolder =
  async (req, res) => {

    try {

      const folder =
        await Folder.findByIdAndUpdate(

          req.params.id,

          {
            name:
              req.body.name,
          },

          {
            new: true,
          }

        );

      res.json(folder);

    } catch (error) {

      res.status(500).json({

        message:
          error.message,

      });

    }

  };